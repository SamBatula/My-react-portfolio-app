/*


*/

// typing rafce generates the skeleton functional component below
import React,  { useEffect, useState }   from 'react'
import ProfilePic from '../assets/profilepic.jpg'
{/* md:h-sreen attribute fixes the size for mobile view so there is no overlapping */}

const About = () => {
  return (
    <div name='about' className=' w-full md:h-screen bg-[#023020] text-[#ffffff]'>
        <div className='flex flex-col justify-center items-center w-full h-full p-4 mx-auto'>
           {/* Container div or parent div*/} 
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#d9b99b]'> About </p>
                </div>
                <div>
                </div>
           </div>
           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    {/* importing personal picture and changing max width and border radius to have round edges */}
                    <img src = {ProfilePic} alt = "ProfilePic Image" style={{width: '300px', borderRadius: 30}}/>
                </div>      
                <div className='sm:textright text-xl font-normal  text-[#ccd6f6] '>
                  <p> I am a recent graduate from Syracuse University with a B.S. in Computer Engineering actively searching for entry level Software Engineering positions. I am experienced in numerous specialized development fields: Embedded systems development using (C, C++ and Python). Android development using (Kotlin, Java and Android SDK). Full stack development using (ReactJS, JavaScript, HTML and CSS). And finally Game development using the (OpenGL API and C++). I am passionate about learning new tech stacks and mastering my technical skills. 
                    </p>  
                </div>
           </div>
        </div>
    </div>
  )
}

export default About