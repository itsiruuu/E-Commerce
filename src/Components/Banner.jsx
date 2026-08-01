import { FaArrowRightFromBracket } from "react-icons/fa6";
import React, { lazy, Suspense } from 'react'
import Container from './Container';
import Banner1 from '../assets/Bnrimage1.png'
import Banner2 from '../assets/Bnrimage2.png'
import Banner3 from '../assets/Bnrimage3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";

const Slider = SlickSlider.default || SlickSlider;

const Banner = () => {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
        <div>
            <ul className='absolute bottom-0 left-[50%]'> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div className='w-3 h-3 rounded-full bg-gray-400'> </div>
    )
};

    return (
        <div className='pb-35'>
            <div className='container mx-auto'>
               <div className='flex gap-12 items-center'>

               
                <div className='w-[20%] border-r pr-5'>

                    <ul className='py-10 space-y-4'>
                        <li className='flex  justify-between items-center'>Woman’s Fashion <FaArrowRightFromBracket className='cursor-pointer'/> </li>
                        <li className='flex  justify-between  items-center'>Men’s Fashion <FaArrowRightFromBracket className='cursor-pointer' /> </li>
                        <li className='flex  justify-between  items-center'>Electronics</li>
                        <li className='flex  justify-between   items-center'>Home & Lifestyle</li>
                        <li className='flex  justify-between  items-center'>Medicine</li>
                        <li className='flex  justify-between  items-center'>Sports & Outdoor</li>
                        <li className='flex  justify-between  items-center'>Baby’s & Toys</li>
                        <li className='flex  justify-between  items-center'>Groceries & Pets</li>
                        <li className='flex  justify-between  items-center'>Health & Beauty</li>
                    </ul>

                </div>

                <div className='w-[80%] mt-10'>

                            
                    <Slider {...settings} className=''>
                        <div>
                            <img src={Banner1} alt="" />
                        </div>
                         <div>
                            <img src={Banner2} alt="" />
                        </div>
                         <div>
                            <img src={Banner3} alt="" />
                        </div>


                    </Slider>

                </div>

                </div>

            </div>

        </div>
    )
}

export default Banner
