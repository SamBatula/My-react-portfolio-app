// typing rafce generates the skeleton functional component below
import React from 'react'
import Kotlin from '../assets/kotlin2.png';
import Java from '../assets/java2.png';
import CPP from '../assets/c++.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Python from '../assets/python.png';
import VisualStudio from '../assets/vs2.png';
import AndroidStudio from '../assets/as.png';
import OpenGL from '../assets/opengl.png';
import JavaScript from '../assets/javascript.png';
import Git from '../assets/git.png';



const Proficiency = () => {
  return (
    <div name = 'proficient'  className=' w-full md:h-screen bg-[#020817] text-[#ccd6f6]'>
        {/* Parent Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#94a4b8] text-[#ffffff]'> Skills</p>
                <p className='py-4'> Most proficient Languages and Tools</p>
            </div>

            {/* Container for all the 9 icons */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Java} alt="java icon"/>
                    <p className='my-4'> Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="javascript icon"/>
                    <p className='my-4'> JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="python icon"/>
                    <p className='my-4'> Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPP} alt="c++ icon"/>
                    <p className='my-4'> C++</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={Git} alt="git icon"/>
                    <p className='my-4'> Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="github icon"/>
                    <p className='my-4'> Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt="firebase icon"/>
                    <p className='my-4'> Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={VisualStudio} alt="VS icon"/>
                    <p className='my-4'> Visual Studio</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AndroidStudio} alt="AS icon"/>
                    <p className='my-4'> Android Studio</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proficiency