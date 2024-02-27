import React, { useRef, useEffect, useState } from 'react';
import Header from '../customer/header/Header';
import Nav from '../customer/header/Nav';
import Home from './home/Home';
import ProfileMenu from './header/ProfileMenu';

const Main = () => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isProfileClicked, setIsProfileClicked] = useState(false);

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
            <div className="fixed w-full z-10 top-0 " ref={headerRef}>
                <Header 
                    isProfileClicked={isProfileClicked}
                    setIsProfileClicked={setIsProfileClicked}
                    handleProfileClick={handleProfileClick}
                />
                <Nav isProfileClicked={isProfileClicked} />
            </div>
            {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} /> }
            <Home 
                headerHeight={headerHeight}
                isProfileClicked={isProfileClicked}
            />
        </div>
    );
};

export default Main
