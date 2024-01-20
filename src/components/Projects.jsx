// typing rafce generates the skeleton functional component below
import React from 'react'

// TOOK OUT BMO WEBSITE import BMO from '../assets/bmo.png';
import CycleSense from '../assets/cyclesense.jpg';
import FindMyProf from '../assets/findmyprof2.png';
import MeetingMaker from '../assets/meetingmaker2.png';
import Rubiks from '../assets/rubikSim.png';
import TDWORLD from '../assets/TDworld.png';
import PORTFOLIO from '../assets/portfolio.png';


const Projects = () => {
  return (
    <div name='projects' className=' w-full md:h-screen text-[#ccd6f6] bg-[#020817]'>
        {/* Container or parent  */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-[#ffffff] border-[#94a4b8]'> Projects</p>
            <p className='py-6'> </p>
          </div>

          {/* Grid container  */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

           {/* card item container Cycle Sense  */}
            <div style={{backgroundImage: `url(${CycleSense})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
              
              {/* hover effects  */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Embedded Senior Design Capstone | Finalists
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://youtube.com/shorts/eiIiDPgafrE?feature=share'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'>
                         Demo</button>
                  </a>
                  <a href='https://github.com/SamBatula/BikeBuddies'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Code</button>
                  </a>
                </div>
              </div>
            </div>

            {/* card item container FindMyProf */}
            <div style={{backgroundImage: `url(${FindMyProf})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
              
              {/* hover effects  */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  FindMyProfessor | Android App
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://www.youtube.com/watch?v=n2lr9RcwaHk'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Demo</button>
                  </a>
                  <a href='https://github.com/SamBatula/FindMyProfessor'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Code</button>
                  </a>
                </div>
              </div>
            </div>

            {/* card item container MeetingMaker */}
            <div style={{backgroundImage: `url(${MeetingMaker})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
              
              {/* hover effects  */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Meeting Maker | Android App
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://www.youtube.com/watch?v=rKNsXxA-0vI'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Demo</button>
                  </a>
                  <a href='https://github.com/SamBatula/MeetingMaker-Android-App'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Code</button>
                  </a>
                </div>
              </div>
            </div>

            {/* card item container rubikSim */}
            <div style={{backgroundImage: `url(${Rubiks})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
              
              {/* hover effects  */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Rubiks Cube | Simulator
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://youtu.be/NFdrz8LwQ-0'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'>
                         Demo</button>
                  </a>
                  <a href='https://github.com/SamBatula/Rubiks-Cube-OpenGL'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Code</button>
                  </a>
                </div>
              </div>
            </div>
            {/* card item container TDworld */}
            <div style={{backgroundImage: `url(${TDWORLD})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
              
              {/* hover effects  */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  3D World | Simulator
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://youtu.be/-doxdjbxlro'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Demo</button>
                  </a>
                  <a href='https://github.com/SamBatula/3DWORLD-SIMULATION-OpenGL'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Code</button>
                  </a>
                </div>
              </div>
            </div>
            {/* card item container BMO */}
            <div style={{backgroundImage: `url(${PORTFOLIO})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'>
              
              {/* hover effects  */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Personal Portfolio Website V2
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://samsondeenbatula.vercel.app/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Demo</button>
                  </a>
                  <a href='https://github.com/SamBatula/My-react-portfolio-app'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#333] text-[#ccd6f6] font-bold text-lg'> 
                      Code</button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Projects