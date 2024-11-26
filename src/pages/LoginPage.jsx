import React from 'react'
import millionaireImage from '../assets/images/millionaire.jpg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='filter backdrop-blur-sm relative z-10 w-full h-full flex flex-col justify-center items-center gap-20'>
      <div className='w-96 rounded-full'>
        <img src={millionaireImage} alt="MILLIONAIRE" className='rounded-full'/>
      </div>
      <Link to="/game">
        <div className="px-36 py-8 text-white text-6xl clip-path font-bold rounded-lg border-y-2 border-amber-700 bg-gradient-to-b from-black via-purple-800 to-purple-600 hover:from-purple-800 hover:to-black cursor-pointer">
          LET'S PLAY!
        </div>
      </Link>
    </div>
  )
}

export default LoginPage
