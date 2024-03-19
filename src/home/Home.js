import React, { useRef, useEffect, useState } from "react";
import Header from "../header/Header";
import Nav from "../header/Nav";
import ProfileMenu from "../header/ProfileMenu";
import Banner from './Banner';
import Category from './Category';
import Deals from './Deals';
import BestSeller from './BestSeller';
import Footer from "../footer/Footer";
// import BrandBag from './BrandBag';

const Home = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};

  const handleProfileClick = () => {
    setIsProfileClicked(!isProfileClicked);
  };

    // get the header height means height of header+nav bar
    useEffect(() => {
      const updateHeaderHeight = () => {
          setHeaderHeight(headerRef.current?.offsetHeight);
      }
      
      // Initial height
      updateHeaderHeight();

      // Listen for window resize event
      window.addEventListener('resize', updateHeaderHeight);

      // Clean up the event listener
      return () => {
          window.removeEventListener('resize', updateHeaderHeight);
      };

    }, [headerHeight]); 


  return (
    <div>
      {/* fixed header and nav bar  */}
      <div className="fixed w-full z-10 top-0 " ref={headerRef}>
        <Header handleProfileClick={handleProfileClick} />
        <div style={blurStyle}>
            <Nav  />
        </div>
        {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} /> }
      </div>

      <div style={blurStyle}>
        <Banner headerHeight = {headerHeight}/>
        <Category />
        <Deals />
        <BestSeller />
      </div>

      {/* fixed footer  */}
      <div style={blurStyle}>
          <Footer/>
      </div>
    </div>
  )
}

export default Home
