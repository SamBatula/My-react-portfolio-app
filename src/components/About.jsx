
// typing rafce generates the skeleton functional component below
import React,  { useEffect, useState }   from 'react'
import ProfilePic from '../assets/profilepic.jpg'
{/* md:h-sreen attribute fixes the size for mobile view so there is no overlapping */}

const About = () => {
  return (
    <div name='about' className=' w-full md:h-screen bg-[#020817] text-[#ffffff]'>
        <div className='flex flex-col justify-center items-center w-full h-full p-4 mx-auto'>
           {/* Container div or parent div*/} 
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#94a4b8]'> About </p>
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
                  <p> I am currently working at Capital One as a Software Engineer in their CODA program. I am utilizing skills I cultivated throughout my academic career at Syracuse University and after graduation, such as Full Stack Development and Data Base Management to create solutions to our business problems. On my free time, I am building tools to streamline my day to day activities for my side gig in Photography, Videography and Content Creation. I am excited for my new adventure with Capital One.
                    </p>  
                </div>
           </div>
        </div>
    </div>
  )
}

export default About