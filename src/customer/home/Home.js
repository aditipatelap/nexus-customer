import React from "react";
import Nav from '../header/Nav';
import Header from '../header/Header';
import Banner from './Banner';
import Category from './Category';
import Deals from './Deals';
import BestSeller from './BestSeller';
import BrandBag from './BrandBag';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <main>
        <header>
          <div className="fixed w-full z-10 top-0">
            <Header />
            <Nav />
          </div>
          <Banner/>
          <Category />
          <Deals />
          <BestSeller />
          <BrandBag />
          <Footer />
        </header>
    </main>
  )
}

export default Home
