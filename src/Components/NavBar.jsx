import React from 'react'
import Container from './Container';
import logo from '../assets/logo.png'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import {RxMagnifyingGlass} from "react-icons/rx";

function NavBar() {
  return (
    <div className='border-b'>
      <Container>
        <div className='text-black flex justify-between py-7'>
          <div>
            <img src={logo} alt="" />
          </div>

          <ul className='text-black flex gap-12 items-center '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Sign Up</li>
          </ul>
          <div className='flex justify-between items-center gap-7.5 cursor-pointer'>
            <div className=' relative pl-5 py-1.5 pr-3 bg-[#82828218]'>
              <input type="text" className='pr-17.5 cursor-pointer ' placeholder='What are you looking for? ' />
              <RxMagnifyingGlass className=' absolute top-1 right-3 text-[30px]' />

            </div>

            <div className='flex gap-4 '>
              <CiHeart className='text-[30px]' />
              <CiShoppingCart className='text-[30px]' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NavBar
