import React, { createContext, useState } from 'react'

export const GameContext = createContext()

const GameProvider = ({children}) => {

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