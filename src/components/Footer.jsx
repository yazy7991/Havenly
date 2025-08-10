import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
    overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row
        justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark}/>
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Amet repellendus ab 
                    earum quos iure! Autem eaque porro sit 
                    sunt harum, ipsam, molestiae amet, 
                    excepturi nesciunt culpa aspernatur 
                    impedit officiis fugit?</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='#Header' 
                    className='hover:text-white'>Home</a>
                    <a href='#About' 
                    className='hover:text-white'>About Us</a>
                    <a href='#Contact' 
                    className='hover:text-white'>Contact Us</a>
                    <a href='#' 
                    className='hover:text-white'>Privacy policy</a>
                </ul>
            </div>
            <div></div>
        </div>
        <div></div>
      
    </div>
  )
}

export default Footer
