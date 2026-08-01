import React from 'react';
import Banner from '../Components/Banner';
import Flashsales from '../Components/Flashsales';
import Categories from '../Components/Categories'
import App from '../Components/Apps';


const Home = () => {
  return (
    <div>
       <Banner />
       <Flashsales />
      <Categories />
      <App />
    </div>
  );
};

export default Home;