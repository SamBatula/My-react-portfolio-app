
/*
    NOTES 
    1.) 
    creating a fixed navigation bar on top with a width at 100%, 
    height at 80 pixels, 
    justify-between is the space between, 
    items is centered, 
    px is padding on the x axis to be 4, 
    finally we have a custom background color 
    Dark Green - bg-[#023020]
    

    2.) 2nd div is to create/load in the logo we have created with an inline width of 170 pixels

    3.) ul(unordered list) is for the tabs/menu -> Home, About, etc
        li (list of items)
        hidden hides it originally
        md:flex hides it until it reaches a point of 768 pixels and then shows
        this is good for if you have 2 tabs on 1 screen to have more space on the site.
        full screen will of course show the menu

    4.) 4th div Hamburger to add react icons (hamburger is the 3 lines on the right)
        once it reaches 768 pixels the hamburger hides and the menu shoes
        adding and changing the z index to 10 adds the hamburger for the mobile view
        using an onClick Listener, if 
    
    5.) ul(unordered list) Mobile menu
        if  !nav is true, set it to hidden, otherwise style it to how we designed

    6.) social icons

        ul(unordered list) with a nested list of items,
        hidden until you reach 1024 pixels, then the social icons are displayed
        Resume Color Code:  Hunter Green bg-[#355E3B] 
        Linkedin Color code: Linkedin Blue bg-[#0077b5]
        Github Color code: Github Purple bg-[#6e5494]
        Email Color code: Github black/grayish bg-[#333]

    */
// typing rafce generates the skeleton functional component below

import React, {useState} from 'react'
import {FaBars, FaTimes,FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {

    const[nav, setNav] = useState(false)
    {/* click function handleClick to setNav to the opposite of its current value */}
    const handleClick = () => setNav(!nav)
  return (
    

    <div className = 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023020] text-gray-300'>
        
        <div>
            <img src = {Logo} alt = "Logo Image" style={{width: '170px'}}/>
        </div>

        {/* 3.) Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact</li>
            </ul>

        {/* 4.) Hamburger */}
        <div onClick = {handleClick} className = 'md:hidden z-10'>
           {!nav ?  <FaBars /> :  <FaTimes />}
        </div>

        {/* 5.) Mobile Menu */}

        <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#023020] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Resume</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* 6.) Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>    
        
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#355E3B] '>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6e5494]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Navbar