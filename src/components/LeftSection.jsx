import React, { useContext, useEffect } from 'react'
// import questionCard from '../data/QuestionCard';
import { getQuestions } from '../data/QuestionCard';
import { GameContext } from '../context/GameProvider';


const LeftSection = () => {

  const { step, questions, setQuestions, nextQuestion, resetGame } = useContext(GameContext)



  return (
    <div className='flex flex-col justify-center items-center h-screen px-16 gap-8'>
      <div className='px-20 py-4 text-white text-xl clip-path font-bold rounded-lg border-y-2  border-amber-700 bg-gradient-to-b from-purple-400 via-purple-800 to-purple-950'>{
        step < questions.length ? questions[step]?.question : '🎉 Congratulations! You answered all questions correctly!'}
      </div>
      <div className='grid grid-cols-2 gap-4 w-full'>
        {step < questions.length ? questions[step]?.answers.map((option, index) => (
          <div key={index} onClick={() => nextQuestion(index)} className='px-6 py-4 w-full text-white text-xl clip-path font-bold rounded-lg border-y-2  border-amber-700 bg-gradient-to-b from-purple-950 via-purple-800 to-purple-400 hover:from-purple-400 hover:to-purple-950 cursor-pointer hover:border-y-4'>{option.text}</div>
        )) : <button
          onClick={resetGame}
          className='px-6 py-4 text-white text-xl clip-path font-bold rounded-lg border-y-2 border-amber-700 bg-gradient-to-b from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:to-green-600 cursor-pointer'
        >
          Restart Game
        </button>}
      </div>
    </div>
  )
}

export default LeftSection