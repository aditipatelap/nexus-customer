import React from "react";
import Banner from './Banner';
import Category from './Category';
import Deals from './Deals';
import BestSeller from './BestSeller';
import BrandBag from './BrandBag';
import Footer from '../footer/Footer';

const Home = ({ headerHeight, isProfileClicked }) => {
  const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};
  
  return (
    <div style={blurStyle}>
      <Banner headerHeight = {headerHeight}/>
      <Category />
      <Deals />
      <BestSeller />
      <BrandBag />
      <Footer />
    </div>
  )
}

export default Home
