/*


*/

// typing rafce generates the skeleton functional component below
import React from 'react'
import ProfilePic from '../assets/profilepic.jpg'

{/* md:h-sreen attribute fixes the size for mobile view so there is no overlapping */}

const About = () => {
  return (
    <div name='about' className=' w-full md:h-screen bg-[#023020] text-[#ccd6f6]'>
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
                  <p> I am a recent graduate from Syracuse University with a B.S. in Computer Engineering, looking for entry level Software Development positions. I have experience with Android Applications development using Java and Kotlin and Android SDK, experience with 3D models and animations using OpenGL API and C++, and Machine Learning using Python. I aspire to be an App and Web developer who creates products that can ultimately streamline people's day to day tasks. I'm passionate about what I do and hope to continue doing this for the rest of my life.
                    </p>  
                </div>
           </div>
        </div>
    </div>
  )
}

export default About