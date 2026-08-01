import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import CountDown from './CountDown'
import Card from './Card'
import Button from './Button'
import MusicBanner from '../assets/Categoriesbox.png';

import ReactSlick from 'react-slick'
const Slider = ReactSlick.default || ReactSlick
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-4 cursor-pointer hover:bg-gray-200 transition-colors z-10'
      onClick={onClick}
    >
      <FaArrowRight className='text-2xl text-black' />
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className='w-11.5 h-11.5 rounded-full bg-[#F5F5F5] flex items-center justify-center absolute -top-12 right-18 cursor-pointer hover:bg-gray-200 transition-colors z-10'
      onClick={onClick}
    >
      <FaArrowLeft className='text-2xl text-black' />
    </div>
  )
}

const Products = ({
  sectionTitle = "This Month",
  heading = "Best Selling Products",
  productsData = [],
  showCountdown = false,
  count = {},
  isSlider = false,
  buttonText = "View All" 
}) => {
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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <div className='mt-35'>
      <Container>
        <div className='flex justify-between items-end mb-10'>
          <div className='flex gap-21.75 items-end'>
            <SecHead title={sectionTitle} heading={heading} />
            {/* {showCountdown && (
              <CountDown
                Days={count.days}
                Hours={count.hours}
                Minutes={count.minutes}
                Seconds={count.seconds}
              />
            )} */}
          </div>

          {buttonText && (
            <Button className='px-12 py-4 text-white bg-[#DB4444] rounded hover:bg-red-600 transition-colors'>
              {buttonText}
            </Button>
          )}
        </div>

        <div className='mt-10 relative'>
          {isSlider ? (
            <Slider {...settings}>
              {productsData.map((item, index) => (
                <div key={index} className='flex justify-between'>
                  <Card
                    image={item.image || item.imgSrc}
                    discount={item.discount}
                    name={item.name || item.title}
                    oldPrice={item.oldPrice || item.disPrice}
                    currentPrice={item.currentPrice || item.price}
                    rating={item.rating || 5}
                    reviews={item.reviews || item.review}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-15'>
              {productsData.map((item, index) => (
                <Card
                  key={index}
                  image={item.image || item.imgSrc}
                  discount={item.discount}
                  name={item.name || item.title}
                  oldPrice={item.oldPrice || item.disPrice}
                  currentPrice={item.currentPrice || item.price}
                  rating={item.rating || 5}
                  reviews={item.reviews || item.review}
                />
              ))}
            </div>
          )}
        </div>

        <div className='border-b border-secondary mt-15 mb-20'></div>
      </Container>
    </div>

    
  )
}


export default Products