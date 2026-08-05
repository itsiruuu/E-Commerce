import React from 'react';
import Banner from '../Components/Banner';
import Flashsales from '../Components/Flashsales';
import Categories from '../Components/Categories'
import App from '../Components/Apps';
import FeatureBox from '../Components/FeatureBox';
import Explore from '../Components/Explore';
import Service from '../Components/Services';
import Music from '../Components/Music';

const Home = () => {
  return (
    <div>
       <Banner />
       <Flashsales />
      <Categories />
      <App />
       <Music />
      <Explore />
      <FeatureBox />
      <Service />
     
    </div>
  );
};

export default Home;