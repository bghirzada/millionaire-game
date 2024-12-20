import React, { useContext } from 'react'
import Header from '../components/Header';
import RightSection from '../components/RightSection';
import LeftSection from '../components/LeftSection';
import Timer from '../components/Timer';
import { GameContext } from '../context/GameProvider';


const GamePage = () => {


  return (
    <div className='filter backdrop-blur-md relative z-10 w-full h-full '>
      <Header />
      <div className='w-fit h-fit absolute top-24 left-1/2 transform -translate-x-1/2 rounded-full border-2 border-sky-950'><Timer /></div>
      <div className='grid grid-cols-2'>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  )
}

export default GamePage