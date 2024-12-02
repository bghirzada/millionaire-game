import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/GameProvider'

const Timer = () => {
    const [timer, setTimer] = useState(30)
    const {step, resetGame} = useContext(GameContext)

    useEffect(() => {
        if (timer <= 0) {
            alert('Time is up! Restarting the game...');
            resetGame();
            return;
        }

        const interval = setInterval(() => {
            setTimer((count) => (count - 1))    
        }, 1000)

        return () => clearInterval(interval)
        
    }, [timer, resetGame])

    useEffect(() => {
        setTimer(30)
    }, [step])
    return (
        <div className='w-40 h-40 flex justify-center items-center text-5xl text-white border-2 border-amber-700 rounded-full'>{timer}</div>
    )
}

export default Timer