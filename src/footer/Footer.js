import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    const basePath = process.env.PUBLIC_URL + "/images/logo";

    const quickLinks = [
        {id: 1, name: "About Us", href: "#"},
        {id: 2, name: "Contact Us", href: "#"},
        {id: 3, name: "Customer Services", href: "#"},
        {id: 4, name: "Terms & Conditions", href: "#"},
        {id: 5, name: "Become a Seller", href: "#"},
    ];

    const socialLinks = [
        {id: 1, name: "Facebook", href: "#"},
        {id: 2, name: "Instagram", href: "#"},
        {id: 3, name: "Twitter", href: "#"},
        {id: 4, name: "YouTube", href: "#"},
    ];

    const categoriesLinks = [
        {id: 1, name: "Fashion", href: "#"},
        {id: 2, name: "Electronics", href: "#"},
        {id: 3, name: "Books", href: "#"},
        {id: 4, name: "Travel", href: "#"},
        {id: 5, name: "Health", href: "#"},
    ];
    
    return (
        <footer className="bg-sky-900 text-white">
            <div className="flex flex-row px-6 sm:px-2 xs:px-4 py-5 md:py-4 sm:py-3 xs:py-2 items-start justify-between">
                {/* Logo + Address */}
                <div className="pr-2 w-60 md:w-40 sm:w-36">
                    <div className="pl-0 h-20 ">
                        <Link to="/">
                            <img src={basePath + "/name_1x.png"} alt="nexus" className="h-full w-full object-scale-down" />
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-1 ">
                        <p className="font-poppins md:text-sm sm:text-xs xs:text-xs ">
                            nexus building, uajala circle, Thaltej, Ahmedabad, Gujarat - 382444. <br />
                            GST:- 3232FCYVYV2312312 <br />
                        </p>
                        <Link to="/" className="md:text-sm sm:text-xs xs:text-xs hover:underline hover:text-sky-400">www.nexushere.com</Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:mt-5 sm:mt-5 xs:mt-5 mr-1">
                    <ul className="space-y-3 sm:space-y-2 xs:space-y-1"> 
                        {quickLinks.map((link) => (
                            <li key={link.id} className="font-poppins md:text-sm sm:text-xs xs:text-xs nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* categories link only shown on larger screens */}
                <div className="md:mt-4 sm:mt-4 xs:mt-5 md:hidden sm:hidden xs:hidden">
                    <h2 className="font-poppins text-xl md:text-lg sm:text-base xs:text-sm font-semibold mb-2">CATEGORIES</h2>
                    <ul className="item-center space-y-2 px-3"> 
                        {categoriesLinks.map((link) => (
                            <li key={link.id} className="font-poppins md:text-sm sm:text-xs xs:text-xs nav-link text-wrap">
                                <Link to="/home/products">
                                   {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Social Links*/}
                <div className="md:mt-4 sm:mt-4 xs:mt-5">
                    <h2 className="font-poppins text-xl md:text-lg sm:text-base xs:text-sm font-semibold mb-2">FOLLOW US</h2>
                    <ul className="item-center space-y-2 px-3"> 
                        {socialLinks.map((link) => (
                            <li key={link.id} className="font-poppins md:text-sm sm:text-xs xs:text-xs nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* copyright footer  */}
            <div className="header-background font-poppins font-normal pt-2 text-center">
                <p className="p-1 text-gray-900 bg-[#deeef7] text-sm md:text-xs sm:text-xs xs:text-[10px]">© 2024 NEXUS E-RETAIL LIMITED All Rights Reserved.</p>
            </div>
        </footer>
    )
};

export default Footer;