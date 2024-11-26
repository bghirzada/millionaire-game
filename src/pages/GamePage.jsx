import React, { useState } from 'react'
import Header from '../components/Header';
import RightSection from '../components/RightSection';
import LeftSection from '../components/LeftSection';
import Timer from '../components/Timer';


const GamePage = () => {
  const [step, setStep] = useState(0)

  return (
    <div className='filter backdrop-blur-md relative z-10 w-full h-full '>
      <Header step={step} />
      <div className='w-fit h-fit absolute top-24 left-1/2 transform -translate-x-1/2 rounded-full border-2 border-sky-950'><Timer/></div>
      <div className='grid grid-cols-2'>
        <LeftSection step={step} setStep={setStep}/>
        <RightSection />
      </div>
    </div>
  )
}

export default GamePage