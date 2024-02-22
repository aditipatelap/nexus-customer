import React from 'react';
import { GiClothes, GiPearlNecklace, GiBabyBottle, GiWashingMachine } from "react-icons/gi";
import { FaHome, FaCarBattery } from "react-icons/fa";
import { MdElectricalServices, MdOutlineFaceRetouchingNatural, MdOutlineSportsHandball, MdToys, MdHealthAndSafety, MdOutlinePets, MdLocalGroceryStore } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { PiOfficeChairFill } from "react-icons/pi";
import { LuScissors } from "react-icons/lu";
import { BsFillLuggageFill } from "react-icons/bs";

const Category = () => {
    const categoriesList = [
        {name: "Apparel and Fashion", icon: <GiClothes />},
        {name: "Electronics", icon: <MdElectricalServices />},
        {name: "Home and Furniture", icon: <FaHome />},
        {name: "Beauty and Personal Care", icon: <MdOutlineFaceRetouchingNatural />},
        {name: "Books and Media", icon: <IoBookSharp />},
        {name: "Sports and Outdoors", icon: <MdOutlineSportsHandball />},
        {name: "Toys and Games", icon: <MdToys />},
        {name: "Automotive", icon: <FaCarBattery />},
        {name: "Health and Wellness", icon: <MdHealthAndSafety />},
        {name: "Jewelry and Accessories", icon: <GiPearlNecklace />},
        {name: "Pet Supplies", icon: <MdOutlinePets />},
        {name: "Grocery and Gourmet", icon: <MdLocalGroceryStore />},
        {name: "Office Supplies", icon: <PiOfficeChairFill />},
        {name: "Art and Craft", icon: <LuScissors />},
        {name: "Travel and Luggage", icon: <BsFillLuggageFill />},
        {name: "Baby and Maternity", icon: <GiBabyBottle />},
        {name: "Tech and Gadgets", icon: <GiWashingMachine />},
    ]

    return (
        <div className="px-6 mt-8">
            {/* Tittle */}
            <div className="color-3F3939 flex flex-row justify-between">
                <h1  className="font-balsamiq-sans font-bold text-2xl sm:text-xl xs:text-lg">SHOP BY CATEGORY</h1>
            </div>
            {/* categories icons and it's name*/}
            <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5">
                {categoriesList.map((category, id) => (
                    <a href="#">
                        <div key={id} className="bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg h-44 flex flex-col items-center justify-center category-hover">
                            <div className='m-2 mb-0'>
                                {React.cloneElement(category.icon, { size: 50 })}
                            </div>
                            <h3 className="font-poppins text-base mt-6 text-center">{category.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );

};

export default Category
