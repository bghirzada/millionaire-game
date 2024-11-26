import React from 'react'
import millionaireImage from '../assets/images/millionaire-img.jpg';

const RightSection = () => {
    return (
        <div className=' flex items-center h-screen'>
            <div className='w-64 ml-40 rounded-full z-10'>
                <img src={millionaireImage} alt="MILLIONAIRE" className='rounded-full' />
            </div>
            <div className='w-40 relative flex flex-col justify-center'>
                <div className='absolute -left-10 flex flex-col gap-3 text-white '>
                    <div className='py-2 px-10 rounded-full border-pink-900 border-2 bg-gradient-to-l from-purple-950 via-purple-800 to-purple-400 hover:from-purple-400 hover:to-purple-950 cursor-pointer'>Audience Poll </div>
                    <div className='py-2 px-10 rounded-full border-pink-900 border-2 bg-gradient-to-l from-purple-950 via-purple-800 to-purple-400 hover:from-purple-400 hover:to-purple-950 cursor-pointer text-center'>50:50</div>
                    <div className='py-2 px-10 rounded-full border-pink-900 border-2 bg-gradient-to-l from-purple-950 via-purple-800 to-purple-400 hover:from-purple-400 hover:to-purple-950 cursor-pointer'>Phone a Friend</div>
                </div>
            </div>
        </div>
    )
}

export default RightSection