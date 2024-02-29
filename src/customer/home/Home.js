import React from "react";
import Banner from './Banner';
import Category from './Category';
import Deals from './Deals';
import BestSeller from './BestSeller';
import BrandBag from './BrandBag';

const Home = ({ headerHeight }) => {
  return (
    <div>
      <Banner headerHeight = {headerHeight}/>
      <Category />
      <Deals />
      <BestSeller />
      <BrandBag />
    </div>
  )
}

export default Home
