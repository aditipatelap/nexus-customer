import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import DataContext  from "../context/DataContext";
import { FiSearch } from "react-icons/fi";
import { FaHeart } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdAccountCircle, MdLogout } from "react-icons/md";

const Header = ({ handleProfileClick }) => {
  const logoPath = process.env.PUBLIC_URL + "/images/logo/logo_3x.png";
  const navigate = useNavigate();
  const { setSearch } = useContext(DataContext);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    navigate("/home/products/all");
  };

  return (
    <header className="max-w-full px-6 py-3 h-fit bg-[#deeef7] text-white flex items-center">
        {/* Logo */} 
        <Link to="/home" className="w-8 h-8 sm:h-10 sm:w-10 md:h-11 md-w-11 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-20 2xl:w-20">
            <img src={logoPath} alt="Nexus" className="h-full w-full object-contain"/>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative flex-grow flex items-center mx-5">
            {/* search icon */}
              <FiSearch className="text-[#3F3939] absolute left-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"/>
            {/* search input field */}
            <input
              type="text"
              id="search"
              placeholder="Search here"
              role="searchbox"
              className="pl-10 py-2 w-full rounded-full bg-white text-black font-poppins border border-gray-300"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
        </form>

        {/* icons on the right */}
        <div className="space-x-3 flex justify-center">
          <Link to="/favorite">
            <FaHeart className="text-[#3F3939] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl"/>  
          </Link>
          <Link to="/bag">
            <IoBagHandle className="text-[#3F3939] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl"/>
          </Link>
          <div onClick={handleProfileClick} className="cursor-pointer">
            <MdAccountCircle className="text-[#3F3939] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl" />
          </div>
          <Link to="/" title="Logout">
            <MdLogout className="text-[#3F3939] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl"/>
          </Link>
        </div>
    </header>
  );
};

export default Header
