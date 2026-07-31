import React, { useEffect, useState } from 'react';
import Container from './Container';
import SecHead from './secHead';
import CountDown from './CountDown';
import Cards from './Cards';
import { countDownDateAndTime } from 'countdown-date-time';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Flashsales = () => {
  const conduct_date = '2026-9-1 12:00:00';
  const [count, setCount] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const countdown = countDownDateAndTime(conduct_date);
      setCount(countdown);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      discount: '-40%',
      image: 'src/assets/Card1.png',
      name: 'HAVIT HV-G92 Gamepad',
      currentPrice: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
    },
    {
      id: 2,
      discount: '-35%',
      image: 'src/assets/Card2.png',
      name: 'AK-900 Wired Keyboard',
      currentPrice: 960,
      oldPrice: 1160,
      rating: 4,
      reviews: 75,
    },
    {
      id: 3,
      discount: '-30%',
      image: 'src/assets/Card3.png',
      name: 'IPS LCD Gaming Monitor',
      currentPrice: 370,
      oldPrice: 400,
      rating: 5,
      reviews: 99,
    },
    {
      id: 4,
      discount: '-25%',
      image: 'src/assets/Card4.png',
      name: 'S-Series Comfort Chair',
      currentPrice: 375,
      oldPrice: 400,
      rating: 4,
      reviews: 99,
    },
  ];

  return (
    <div className='mt-16 mb-20'>
      <Container>
        {/* header*/}
        <div className='flex items-end justify-between mb-10'>
          <div className='flex items-end gap-16'>
            <SecHead title="Today's" heading="Flash Sales" />
            <CountDown
              Days={count.days}
              Hours={count.hours}
              Minutes={count.minutes}
              Seconds={count.seconds}
            />
          </div>

          <div className='flex items-center gap-2'>
            <button className='w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
              <FaArrowLeft className='text-black' />
            </button>
            <button className='w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'>
              <FaArrowRight className='text-black' />
            </button>
          </div>
        </div>
        {/* product card*/}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {products.map((item) => (
            <Cards
              key={item.id}
              discount={item.discount}
              image={item.image}
              name={item.name}
              currentPrice={item.currentPrice}
              oldPrice={item.oldPrice}
              rating={item.rating}
              reviews={item.reviews}
            />
          ))}
        </div>
        <div className='text-center mt-16'>
          <button className='bg-[#DB4444] text-white px-12 py-4 rounded font-medium hover:bg-[#c33838] transition-colors'>
            View All Products
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Flashsales;