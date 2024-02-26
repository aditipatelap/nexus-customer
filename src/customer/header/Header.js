import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";


const Header = () => {
  const logoPath = process.env.PUBLIC_URL + "/images/logo/logo_3x.png";

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (searchQuery) => {
    console.log(searchQuery);
    setSearchQuery('');
  }

  return (
    <header className="max-w-full px-6 py-3 h-fit header-background text-white flex items-center">
        {/* Logo */} 
        <Link to="/home" className="w-8 h-8 sm:h-10 sm:w-10 md:h-11 md-w-11 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20">
            <img src={logoPath} alt="Nexus" className="h-full w-full object-contain"/>
        </Link>

        {/* Search Bar */}
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery) }} className="relative flex-grow flex items-center mx-5">
            {/* search icon */}
              <FiSearch className="color-3F3939 absolute left-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"/>
            {/* search input field */}
            <input
              type="text"
              placeholder="Search here"
              role="searchbox"
              className="pl-10 py-2 w-full rounded-full bg-white text-black font-poppins border border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>

        {/* icons on the right */}
        <div className="space-x-3 flex justify-center">
          <FaHeart className="color-3F3939 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl"/>
          <IoBagHandle className="color-3F3939 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl"/>
          <MdAccountCircle className="color-3F3939 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl"/>
        </div>
    </header>
  )
}

export default Header
