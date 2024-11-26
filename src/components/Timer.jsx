import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((count) => 
                // (count <= 1) && (clearInterval(interval),
                // alert ('Time is up!'),
                // setTimer(0)),
                (count - 1) 
            )
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='w-40 h-40 flex justify-center items-center text-5xl text-white border-2 border-amber-700 rounded-full'>{timer}</div>
    )
}

export default Timer