import React from 'react';
import { Link } from 'react-router-dom';
import { GiClothes, GiPearlNecklace, GiBabyBottle, GiWashingMachine } from "react-icons/gi";
import { FaHome, FaCarBattery } from "react-icons/fa";
import { MdElectricalServices, MdOutlineFaceRetouchingNatural, MdOutlineSportsHandball, MdToys, MdHealthAndSafety, MdOutlinePets, MdLocalGroceryStore } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { PiOfficeChairFill } from "react-icons/pi";
import { LuScissors } from "react-icons/lu";
import { BsFillLuggageFill } from "react-icons/bs";

const Category = () => {
    const categoriesList = [
        {id: 1, name: "Apparel and Fashion", icon: <GiClothes />},
        {id: 2, name: "Electronics", icon: <MdElectricalServices />},
        {id: 3, name: "Home and Furniture", icon: <FaHome />},
        {id: 4, name: "Beauty and Personal Care", icon: <MdOutlineFaceRetouchingNatural />},
        {id: 5, name: "Books and Media", icon: <IoBookSharp />},
        {id: 6, name: "Sports and Outdoors", icon: <MdOutlineSportsHandball />},
        {id: 7, name: "Toys and Games", icon: <MdToys />},
        {id: 8, name: "Automotive", icon: <FaCarBattery />},
        {id: 9, name: "Health and Wellness", icon: <MdHealthAndSafety />},
        {id: 10, name: "Jewelry and Accessories", icon: <GiPearlNecklace />},
        {id: 11, name: "Pet Supplies", icon: <MdOutlinePets />},
        {id: 12, name: "Grocery and Gourmet", icon: <MdLocalGroceryStore />},
        {id: 13, name: "Office Supplies", icon: <PiOfficeChairFill />},
        {id: 14, name: "Art and Craft", icon: <LuScissors />},
        {id: 15, name: "Travel and Luggage", icon: <BsFillLuggageFill />},
        {id: 16, name: "Baby and Maternity", icon: <GiBabyBottle />},
        {id: 17, name: "Tech and Gadgets", icon: <GiWashingMachine />},
    ]

    return (
        <div className="px-6 mb-8">
            {/* Tittle */}
            <div className="text-[#3F3939] flex flex-row justify-between">
                <h1  className="font-balsamiq-sans font-bold text-2xl sm:text-xl xs:text-lg">SHOP BY CATEGORY</h1>
            </div>
            {/* categories icons and it's name*/}
            <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-5 mt-5">
                {categoriesList.map((category) => (
                    <Link to={`/home/products/${category.name}`} key={category.id} >
                        <div className="bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg h-44 flex flex-col items-center justify-center category-hover">
                            <div className='m-2 mb-0'>
                                {React.cloneElement(category.icon, { size: 50 })}
                            </div>
                            <h3 className="px-2 font-poppins text-base md:text-sm sm:text-xs xs:text-xs mt-6 text-center">{category.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );

};

export default Category
