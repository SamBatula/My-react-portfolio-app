/*
Home page:
Name & Description
Button that sends viewer to About me tab

Colors: 
Dark Green - bg-[#023020]
Beige: bg-[#d9b99b]
Github Grey: 
*/

// typing rafce generates the skeleton functional component below
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
    
  return (
    <div name='home' className='w-full h-screen bg-[#023020]'>

    {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className= 'text-4xl sm:text-7xl font-bold text-[#d9b99b]'> Hi, I'm Samson!</h1>
            <h2 className='text-2xl sm:text-2xl font-bold text-[#ccd6f6]'> A Software Developer. </h2>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#355E3B] hover:border-[#355E3B]'> About Me 
                    <span className='group-hover:rotate-90 duration-200'>
                        
                        <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Home