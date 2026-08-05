import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import Card from "./Card";
import Button from "./Button";

import ReactSlick from "react-slick";
const Slider = ReactSlick.default || ReactSlick;

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex items-center justify-center absolute -top-12 right-4 cursor-pointer hover:bg-gray-200 z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-xl" />
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="w-11.5 h-11.5 bg-[#F5F5F5] rounded-full flex items-center justify-center absolute -top-12 right-18 cursor-pointer hover:bg-gray-200 z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-xl" />
    </div>
  );
};

const Products = ({
  sectionTitle = "This Month",
  heading = "Best Selling Products",
  productsData = [],
  isSlider = false,
  buttonText = "View All",
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

  return (
    <div className="mt-35">
      <Container>
        <div className="flex justify-between items-end mb-10">
          <SecHead title={sectionTitle} heading={heading} />

          {buttonText && (
            <Button className="px-12 py-4 bg-[#DB4444] text-white rounded hover:bg-red-600">
              {buttonText}
            </Button>
          )}
        </div>

        <div className="mt-10">
          {isSlider ? (
            <Slider {...settings}>
              {productsData.map((item, index) => (
                <div key={index}>
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
            <div className="flex flex-wrap justify-between gap-y-10 mt-15">
              {productsData.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%]"
                >
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
            </div>
          )}
        </div>

        <div className="border-b border-secondary mt-15 mb-20"></div>
      </Container>
    </div>
  );
};

export default Products;