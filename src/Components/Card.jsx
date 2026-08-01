import React from 'react';
import { FaHeart, FaEye, FaStar } from 'react-icons/fa';

const Cards = ({ discount, image, name, currentPrice, oldPrice, rating, reviews }) => {
  return (
    <div className='group relative w-67.5'>
      {/* Product Info */}
      <div className='relative bg-[#F5F5F5] h-[250px] rounded flex items-center justify-center p-4 overflow-hidden'>
        {/* discount badge */}
        <span className='absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded'>
          {discount}
        </span>

        {/* icons */}
        <div className='absolute top-3 right-3 flex flex-col gap-2'>
          <button className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-all duration-300 shadow-sm'>
            <FaHeart className='text-sm' />
          </button>
          <button className='w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white transition-all duration-300 shadow-sm'>
            <FaEye className='text-sm' />
          </button>
        </div>

        {/* image*/}
        <img src={image} alt={name} className='max-h-[160px] object-contain group-hover:scale-105 transition-transform duration-300' />

        {/* card btn*/}
        <button className='absolute bottom-0 left-0 w-full bg-black text-white py-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          Add To Cart
        </button>
      </div>

      {/* Product Info */}
      <div className='mt-4'>
        <h3 className='font-medium text-black text-base truncate'>{name}</h3>
        <div className='flex items-center gap-3 mt-2'>
          <span className='text-[#DB4444] font-medium'>${currentPrice}</span>
          <span className='text-gray-400 line-through font-medium'>${oldPrice}</span>
        </div>
        
        {/* Rating*/}
        <div className='flex items-center gap-1 mt-2 text-yellow-500 text-sm'>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'} />
          ))}
          <span className='text-gray-500 text-xs font-semibold ml-1'>({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;