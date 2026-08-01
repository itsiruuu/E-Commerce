import React, { useEffect, useState } from 'react';
import Container from './Container';
import SecHead from './SecHead.jsx';
import CountDown from './CountDown';
import Card from './Card';
import Button from './Button';
import { countDownDateAndTime } from 'countdown-date-time';

// Assets
import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Card4 from '../assets/card4.png';

// Icons & Slick Slider
import ReactSlick from 'react-slick';
const Slider = ReactSlick.default || ReactSlick;
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-4 cursor-pointer hover:bg-gray-200 transition-colors z-10'
      onClick={onClick}
    >
      <FaArrowRight className='text-2xl text-black' />
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
      <FaArrowLeft className='text-2xl text-black' />
    </div>
  );
};

const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const conduct_date = '2026-08-30 12:12:12';
  const [count, setCount] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='mt-35'>
      <Container>
        {/* Header and Countdown */}
        <div className='flex gap-21.75 items-end mb-10'>
          <SecHead title="Today’s" heading="Flash Sales" />
          <CountDown
            Days={count.days}
            Hours={count.hours}
            Minutes={count.minutes}
            Seconds={count.seconds}
          />
        </div>

        {/* Product Slider */}
        <div className='mt-10 relative'>
          <Slider {...settings}>
           <div>
    <Card
      image={Card1}
      discount="-40%"
      name="HAVIT HV-G92 Gamepad"
      oldPrice="160"
      currentPrice="140"
      rating={5}
      reviews="88"
    />
  </div>
  <div>
    <Card
      image={Card2}
      discount="-35%"
      name="AK-900 Wired Keyboard"
      oldPrice="1160"
      currentPrice="960"
      rating={4}
      reviews="75"
    />
  </div>
  <div>
    <Card
      image={Card3}
      discount="-30%"
      name="IPS LCD Gaming Monitor"
      oldPrice="400"
      currentPrice="370"
      rating={5}
      reviews="79"
    />
  </div>
  <div>
    <Card
      image={Card4}
      discount="-25%"
      name="S-Series Comfort Chair"
      oldPrice="400"
      currentPrice="375"
      rating={4}
      reviews="77"
    />
  </div>
           <div>
    <Card
      image={Card1}
      discount="-40%"
      name="HAVIT HV-G92 Gamepad"
      oldPrice="160"
      currentPrice="140"
      rating={5}
      reviews="88"
    />
  </div>
  <div>
    <Card
      image={Card2}
      discount="-35%"
      name="AK-900 Wired Keyboard"
      oldPrice="1160"
      currentPrice="960"
      rating={4}
      reviews="75"
    />
  </div>
  <div>
    <Card
      image={Card3}
      discount="-30%"
      name="IPS LCD Gaming Monitor"
      oldPrice="400"
      currentPrice="370"
      rating={5}
      reviews="79"
    />
  </div>
  <div>
    <Card
      image={Card4}
      discount="-25%"
      name="S-Series Comfort Chair"
      oldPrice="400"
      currentPrice="375"
      rating={4}
      reviews="77"
    />
  </div>
          </Slider>
        </div>

        {/* Action Button */}
        <Button className='mx-auto block mt-10'>View All Products</Button>
        <div className='border-b border-secondary mt-15 mb-20'></div>
      </Container>
    </div>
  );
};

export default FlashSales;