// typing rafce generates the skeleton functional component below
import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#020817] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/1895b10c-0208-4eb5-a9d3-2e2e7a1a9588" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#94a4b8] text-[#ffffff]'>Contact</p>
                <p className='text-[#ffffff] py-4'> Feel free to reach out if you have any questions! My Email: Samsonbatula@gmail.com </p>
            </div>
            <input className='bg-[#ffffff] p-2' type = "text" placeholder='Your Name' name ='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type = "email" placeholder='Your Email' name ='email' />
            <textarea className='bg-[#ffffff] p-2' name ="message" rows ="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-[#355E3B] px-4 py-3 my-8 mx-auto flex items-center'> Send Now </button>
        </form>
    </div>
  )
}

export default Contact