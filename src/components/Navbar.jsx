import React from 'react';
import {asset} from '../assets/assets';

function Navbar() {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <img src={asset.logo} alt=''/>
        <ul>
            <a href='#header' className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href='#header' className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href='#header' className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href='#header' className='cursor-pointer hover:text-gray-400'>Home</a>
        </ul>
      
    </div>
  )
}

export default Navbar
