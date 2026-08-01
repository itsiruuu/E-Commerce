import React, { useEffect, useState } from 'react';
import Products from './Products';
import { countDownDateAndTime } from 'countdown-date-time';

// Assets
import Card1 from '../assets/Card5.png';
import Card2 from '../assets/Card6.png';
import Card3 from '../assets/Card7.png';
import Card4 from '../assets/Card8.png';

const flashSaleProducts = [
  { image: Card1, discount: "-40%", name: "HAVIT HV-G92 Gamepad", currentPrice: "140", oldPrice: "160", rating: 5, reviews: "88" },
  { image: Card2, discount: "-35%", name: "AK-900 Wired Keyboard", currentPrice: "960", oldPrice: "1160", rating: 4, reviews: "75" },
  { image: Card3, discount: "-30%", name: "IPS LCD Gaming Monitor", currentPrice: "370", oldPrice: "400", rating: 5, reviews: "79" },
  { image: Card4, discount: "-25%", name: "S-Series Comfort Chair", currentPrice: "375", oldPrice: "400", rating: 4, reviews: "77" },
];

const Home = () => {
  const conduct_date = '2026-08-30 12:12:12';
  const [count, setCount] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(countDownDateAndTime(conduct_date));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Products
        sectionTitle="This Month"
        heading="Best Selling Products"
        productsData={flashSaleProducts}
        showCountdown={true}
        count={count}
        isSlider={true}
      />
    </div>
  );
};

export default Home;