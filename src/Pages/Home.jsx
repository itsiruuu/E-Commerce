import React from 'react';
import Banner from '../Components/Banner';
import Flashsales from '../Components/Flashsales';
import Categories from '../Components/Categories'
// import CategorySection from '../Components/CategorySection';

const Home = () => {
  return (
    <div>
       <Banner />
       <Flashsales />
      <Categories />
    </div>
  );
};

export default Home;