import React from 'react';
import Banner from '../Components/Banner';
import Flashsales from '../Components/Flashsales';
import Categories from '../Components/Categories'


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