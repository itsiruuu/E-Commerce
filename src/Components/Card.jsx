import React from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const Cards = ({
  discount,
  image,
  name,
  currentPrice,
  oldPrice,
  rating,
  reviews,
}) => {
  return (
    <div className="group w-67.5">
      <div className="relative bg-[#F5F5F5] h-[250px] rounded flex items-center justify-center p-4 overflow-hidden">
        <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
          {discount}
        </span>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white">
            <FaHeart />
          </button>

          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#DB4444] hover:text-white">
            <FaEye />
          </button>
        </div>

        <img
          src={image}
          alt={name}
          className="max-h-[160px] object-contain group-hover:scale-105"
        />

        <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 opacity-0 group-hover:opacity-100">
          Add To Cart
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-base font-medium">
          {name}
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <p className="text-[#DB4444] font-medium">
            ${currentPrice}
          </p>

          <p className="text-gray-400 line-through">
            ${oldPrice}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <FaStar
              key={item}
              className={
                item <= rating ? "text-yellow-400" : "text-gray-300"
              }
            />
          ))}

          <span className="text-gray-500 text-sm ml-1">
            ({reviews})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;