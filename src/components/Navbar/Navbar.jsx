 
import React from 'react';
import {Link} from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { Nav } from 'react-bootstrap';


const Navbar = () => {
  return (
     
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>E</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>
            <Link to="/login">
              <button className='bg-[#00df9a] rounded-md font-medium px-4 py-0.4 text-black'>
                Login
              </button>
            </Link>
          </li>
          <li className='p-4'>
            <Link to="/signup">
              <button className='bg-[#00df9a] rounded-md font-medium px-4 py-0.4 text-black'>
                GetStarted
              </button>
            </Link>
          </li>
        </ul>
        <div className='block md:hidden'>
          {!Nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!Nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' }>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>E</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>
              <Link to="/login">
                <button className='bg-[#00df9a] rounded-md font-medium px-4 py-0.4 text-black'>
                  Login
                </button>
              </Link>
            </li>
            <li className='p-4 border-b border-gray-600'>
              <Link to="/signup">
                <button className='bg-[#00df9a] rounded-md font-medium px-4 py-0.4 text-black'>
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Navbar