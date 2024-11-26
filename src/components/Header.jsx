import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard'
import moneyPyramid from '../data/MoneyPyramid'

const Header = ({ step }) => {
    const [showScore, setShowScore] = useState(false)

    return (
        <div className='fixed top-0 w-screen  flex justify-center'>
            <div onClick={() => setShowScore(true)} className="px-20 py-4 m-2 text-white text-xl w-fit clip-path font-bold rounded-lg border-y-2 border-amber-700 bg-gradient-to-b from-black via-indigo-950 to-indigo-700 hover:from-indigo-700 hover:to-black cursor-pointer">
                {moneyPyramid[step].amount}
            </div>
            {!showScore ? <div onClick={() => setShowScore(true)} className='fixed right-2 top-2 p-4 w-fit bg-blue-900 text-white rounded-full cursor-pointer '>
                click
            </div> : <ScoreBoard setShowScore={setShowScore} step={step} />}
        </div>
    )
}

export default Header