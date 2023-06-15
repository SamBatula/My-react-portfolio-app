/*


*/

// typing rafce generates the skeleton functional component below
import React from 'react'
import ProfilePic from '../assets/profilepic.jpg'


const About = () => {
  return (
    <div name='about' className=' w-full h-screen bg-[#023020] text-[#ccd6f6]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           {/* Container div or parent div*/} 
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#355E3B]'> About </p>
                </div>
                <div>
                </div>
           </div>
           <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                    {/* importing personal picture and changing max width and border radius to have round edges */}
                    <img src = {ProfilePic} alt = "ProfilePic Image" style={{width: '300px', borderRadius: 30,}}/>
                </div>      
                <div className='sm:textright font-normal text-[#ccd6f6] '>
                  <p> A recent graduate from Syracuse University with a B.S. in Computer Engineering. Experienced in creating android applications with Android SDK, developing 3d models and animations using OpenGL API , and machine learning using Python. I aspire to be an App and Web developer that develops products which can ultimately streamline poeple's day to day tasks. I like taking photos and editing/producing content on Youtube, Twitch, and Tiktok. I passionate about what I do and hope to continue doing this for the rest of my life.
                    </p>  
                </div>
           </div>
        </div>
    </div>
  )
}

export default About