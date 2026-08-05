import React from 'react';
import Container from './Container';
import SecHead from './SecHead.jsx';
import Card from './Card';

import ReactSlick from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ReactSlick.default || ReactSlick;

import Explore1 from '../assets/Card9.png';   
import Explore2 from '../assets/Card10.png';  
import Explore3 from '../assets/Card11.png';  
import Explore4 from '../assets/Card1.png'; 
import Explore5 from '../assets/Card13.png';  
import Explore6 from '../assets/Card14.png';  
import Explore7 from '../assets/Card15.png';  
import Explore8 from '../assets/Card16.png';  

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-4 cursor-pointer hover:bg-gray-200 transition-colors z-10'
      onClick={onClick}
    >
      <FaArrowRight className='text-xl text-black' />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-18 cursor-pointer hover:bg-gray-200 transition-colors z-10'
      onClick={onClick}
    >
      <FaArrowLeft className='text-xl text-black' />
    </div>
  );
};

const Explore = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, rows: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, rows: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, rows: 2 } },
    ],
  };
  const exploreProducts = [
    {
      image: Explore1,
      discount: '-20%',
      name: 'Breed Dry Dog Food',
      oldPrice: '',
      currentPrice: '100',
      rating: 3,
      reviews: '35',
    },
    {
      image: Explore2,
      discount: '-35%',
      name: 'CANON EOS DSLR Camera',
      oldPrice: '',
      currentPrice: '360',
      rating: 4,
      reviews: '95',
      showAddToCart: true,
    },
    {
      image: Explore3,
      discount: '-30%',
      name: 'ASUS FHD Gaming Laptop',
      oldPrice: '',
      currentPrice: '700',
      rating: 5,
      reviews: '325',
    },
    {
      image: Explore4,
      discount: '-25%',
      name: 'Curology Product Set',
      oldPrice: '',
      currentPrice: '500',
      rating: 4,
      reviews: '145',
    },
    {
      image: Explore5,
      discount: 'NEW',
      name: 'Kids Electric Car',
      oldPrice: '',
      currentPrice: '960',
      rating: 5,
      reviews: '65',
      colors: ['#DB4444', '#000000'],
    },
    {
      image: Explore6,
      discount: '-40%',
      name: 'Jr. Zoom Soccer Cleats',
      oldPrice: '',
      currentPrice: '1160',
      rating: 5,
      reviews: '35',
      colors: ['#EEFF61', '#DB4444'],
    },
    {
      image: Explore7,
      discount: 'NEW',
      name: 'GP11 Shooter USB Gamepad',
      oldPrice: '',
      currentPrice: '660',
      rating: 4.5,
      reviews: '55',
      colors: ['#000000', '#DB4444'],
    },
    {
      image: Explore8,
      discount: 'NEW',
      name: 'Quilted Satin Jacket',
      oldPrice: '',
      currentPrice: '660',
      rating: 4.5,
      reviews: '55',
      colors: ['#184A48', '#DB4444'],
    },
    {
      image: Explore1,
      discount: '-15%',
      name: 'Breed Dry Dog Food',
      oldPrice: '',
      currentPrice: '100',
      rating: 3,
      reviews: '35',
    },
    {
      image: Explore2,
      discount: '-35%',
      name: 'CANON EOS DSLR Camera',
      oldPrice: '',
      currentPrice: '360',
      rating: 4,
      reviews: '95',
      showAddToCart: true,
    },
    {
      image: Explore3,
      discount: '-30%',
      name: 'ASUS FHD Gaming Laptop',
      oldPrice: '',
      currentPrice: '700',
      rating: 5,
      reviews: '325',
    },
    {
      image: Explore4,
      discount: '-25%',
      name: 'Curology Product Set',
      oldPrice: '',
      currentPrice: '500',
      rating: 4,
      reviews: '145',
    },
    {
      image: Explore5,
      discount: 'NEW',
      name: 'Kids Electric Car',
      oldPrice: '',
      currentPrice: '960',
      rating: 5,
      reviews: '65',
      colors: ['#DB4444', '#000000'],
    },
    {
      image: Explore6,
      discount: '-40%',
      name: 'Jr. Zoom Soccer Cleats',
      oldPrice: '',
      currentPrice: '1160',
      rating: 5,
      reviews: '35',
      colors: ['#EEFF61', '#DB4444'],
    },
    {
      image: Explore7,
      discount: 'NEW',
      name: 'GP11 Shooter USB Gamepad',
      oldPrice: '',
      currentPrice: '660',
      rating: 4.5,
      reviews: '55',
      colors: ['#000000', '#DB4444'],
    },
    {
      image: Explore8,
      discount: 'NEW',
      name: 'Quilted Satin Jacket',
      oldPrice: '',
      currentPrice: '660',
      rating: 4.5,
      reviews: '55',
      colors: ['#184A48', '#DB4444'],
    },
  ];

  return (
    <section className='mt-20'>
      <Container>
        <div className='flex gap-5 items-end mb-10'>
          <SecHead title='Our Products' heading='Explore Our Products' />
        </div>

        <div className='relative mt-10'>
          <Slider {...settings}>
            {exploreProducts.map((item, index) => (
              <div key={index} className='p-2'>
                <Card
                  image={item.image}
                  discount={item.discount}
                  name={item.name}
                  oldPrice={item.oldPrice}
                  currentPrice={item.currentPrice}
                  rating={item.rating}
                  reviews={item.reviews}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className='flex justify-center mt-12'>
          <button className='rounded bg-[#DB4444] px-12 py-4 text-white transition-colors hover:bg-red-600'>
            View All Products
          </button>
        </div>

        <div className='border-b border-gray-300 mt-15 mb-20' />
      </Container>
    </section>
  )
}

export default Explore