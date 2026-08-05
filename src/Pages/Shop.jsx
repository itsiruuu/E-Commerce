import React from 'react';
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Container from '../Components/Container';

const Shop = () => {
  return (
    <div>   
        <Container className='py-20'>
            <div className='flex gap-4'>
               <h4>Home</h4>
               <h4>/</h4>
               <h4>Shop</h4>
            </div>
            <div className='flex justify-betweenitems-center'>
            <h2 className='font-bold text-xl mt-12.5'>Shop by Category</h2>
             <div className='flex gap-4 items-center'>
                <h3>show : </h3>
                <div>
             <select name="" id="" className='border border-[#D9D9D9] rounded-[5px] px-10 py-1'>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
             </select>
             </div>
             </div>
             </div>
             <div className='w-[20%]'>
                 
                 <ul className='py-10 space-y-4'>
                    <li className='flex  justify-between items-center'>Woman’s Fashion </li>
                    <li className='flex  justify-between  items-center'>Men’s Fashion </li>
                    <li className='flex  justify-between  items-center'>Electronics</li>
                    <li className='flex  justify-between   items-center'>Home & Lifestyle</li>
                    <li className='flex  justify-between  items-center'>Medicine</li>
                    <li className='flex  justify-between  items-center'>Sports & Outdoor</li>
                    <li className='flex  justify-between  items-center'>Baby’s & Toys</li>
                    <li className='flex  justify-between  items-center'>Groceries & Pets</li>
                    <li className='flex  justify-between  items-center'>Health & Beauty</li>
                </ul>
            </div>
            <div className='w-[80%]'>
             <div>

             </div>
            </div>
        </Container>
    </div>
    );
};

export default Shop;