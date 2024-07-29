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
import React, {useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {

    const[home, setHome] = useState(false)
    {/* click function handleClick to setNav to the opposite of its current value */}
    const handleClick = () => setHome(!home)

  return (
    <div name='home' className='w-full h-screen bg-[#020817]'>

    {/* Parent Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <h1 className= 'text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Hi, I'm Samsondeen!</h1>
            <h2 className='text-2xl sm:text-2xl font-bold text-[#ccd6f6]'> A Project Manager & Software Developer </h2>

    {/* About Me and on Click container w/ arrow animation using link react-scroll library */}
    {/* to add border on the about me add this code after the hover:bg code... 
    CODE: hover:border-[#355E3B] */}
            <div>
            <Link onClick = {handleClick} to="about"  smooth={true} offset={50} duration={500}>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#59606c]'>About Me
                    
                    <span className='group-hover:rotate-90 duration-200'>
                        
                        <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                </button>
            </Link>
                
            </div>
        </div>
        
    </div>
  )
}

export default Home