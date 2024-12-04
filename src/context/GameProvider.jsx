import React, { createContext, useEffect, useState } from 'react'
import { getQuestions } from '../data/QuestionCard'

export const GameContext = createContext()

const GameProvider = ({ children }) => {

  const [questions, setQuestions] = useState([])
  const [step, setStep] = useState(0)
  const [points, setPoints] = useState(0)

  const nextQuestion = (index) => {
    if (questions[step].answers[index].correct) {
      setPoints(points + 1);
      setStep(step + 1);


    } else {
      alert("Oops! Wrong answer. Better luck next time!");
      setPoints(0);
      setStep(0);
    }
  };

  const resetGame = () => {
    setStep(0);
    setPoints(0);
  };

  useEffect(() => {
    getQuestionsAndSort()
  }, [])
  const sort = ['easy', 'medium', 'hard']

  const getQuestionsAndSort = async () => {
    console.log('atmas');

    const questionss = await getQuestions()
    const filtered = questionss?.map((question) => (
      {
        question: question.question,
        answers: [
          { text: question.correct_answer, correct: true },
          ...question.incorrect_answers.map((answer) => ({ text: answer, correct: false }))
        ].sort(() => Math.random() - 0.5)
      }
    )).sort((question) => {
      return sort.indexOf(question.difficulty);
    })
    setQuestions(filtered)
  }

  return (
    <GameContext.Provider value={{
      questions,
      setQuestions,
      step,
      setStep,
      points,
      setPoints,
      nextQuestion,
      resetGame
    }}>
      {
        children
      }
    </GameContext.Provider>
  )
}

export default GameProvider