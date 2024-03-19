import React, { useRef, useEffect, useState } from 'react';
import Header from './header/Header';
import Nav from './header/Nav';
import ProfileMenu from './header/ProfileMenu';
import Footer from './footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './home/Home';
import Account from './account/Account';
import Products from './product/Products';
import ProductPage from './product/ProductPage';
import Login from './login/Login';
import Signup from './signup/Signup';

const Main = () => {
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
            <DataProvider>
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
                        <Route path="/home" element={ <Home headerHeight={headerHeight}/> } />
                        <Route path="/account" element={ <Account headerHeight={headerHeight}/> } />
                        <Route path="/home/products" element={ <Products headerHeight={headerHeight}/> } />
                        <Route path="/home/products/:id" element={ <ProductPage headerHeight={headerHeight}/> } />
                        {/* <Route path="/*" element={ <Missing headerHeight={headerHeight}/> } /> */}
                    </Routes>
                </div>

                {/* fixed footer  */}
                <div style={blurStyle}>
                    <Footer/>
                </div>
            </DataProvider>
        </div>
    );
};

export default Main
