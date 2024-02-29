import React, { useRef, useEffect, useState } from 'react';
import Header from '../customer/header/Header';
import Nav from '../customer/header/Nav';
import ProfileMenu from './header/ProfileMenu';
import Footer from '../customer/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Account from './account/Account';

const Main = () => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};

    const handleProfileClick = () => {
        setIsProfileClicked(!isProfileClicked);
        // console.log(isProfileClicked);
    };


    useEffect(() => {
        const updateHeaderHeight = () => {
            setHeaderHeight(headerRef.current?.offsetHeight);
            // console.log(headerHeight);
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
                <Header 
                    isProfileClicked={isProfileClicked}
                    setIsProfileClicked={setIsProfileClicked}
                    handleProfileClick={handleProfileClick}
                />
                <div style={blurStyle}>
                    <Nav  />
                </div>
                {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} /> }
            </div>

            {/* change the pages */}
            <div style={blurStyle}>
                <Routes>
                    <Route path="/" element={ <Home headerHeight={headerHeight}/> } />
                    <Route path="/account" element={ <Account headerHeight={headerHeight}/> } />
                </Routes>
            </div>

            {/* fixed footer  */}
            <div style={blurStyle}>
                <Footer/>
            </div>
        </div>
    );
};

export default Main
