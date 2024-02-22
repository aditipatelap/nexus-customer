import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    const basePath = process.env.PUBLIC_URL + "/images/logo";

    const quickLinks = [
        {name: "About Us", href: "#"},
        {name: "Contact Us", href: "#"},
        {name: "Customer Services", href: "#"},
        {name: "Terms & Conditions", href: "#"},
        {name: "Become a Seller", href: "#"}
    ];

    const socialLinks = [
        {name: "Facebook", href: "#"},
        {name: "Instagram", href: "#"},
        {name: "Twitter", href: "#"},
        {name: "YouTube", href: "#"}
    ];
    
    return (

        <footer className="bg-sky-900 text-white">
            <div className="grid grid-cols-3 place-items-center mx-6 mt-10 py-5 items-start">
                {/* Logo + Address */}
                <div className="">
                    <Link to="/home">
                        <img src={basePath + "/name_1x.png"} alt="nexus" className="p-8 pl-0" />
                    </Link>
                    <div className="flex flex-col space-y-1">
                        <p className="font-poppins">
                            nexus building, uajala circle, Thaltej, Ahmedabad, Gujarat - 382444. <br />
                            GST:- 3232FCYVYV2312312 <br />
                        </p>
                        <Link to="/home" className="hover:underline hover:text-sky-400">www.nexushere.com</Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="">
                    <ul className="space-y-3"> 
                        {quickLinks.map((link) => (
                            <li className="font-poppins nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Social Links*/}
                <div className="">
                    <h2 className="font-poppins text-2xl font-semibold mb-2">FOLLOW US</h2>
                    <ul className="item-center space-y-2 px-3"> 
                        {socialLinks.map((link) => (
                            <li className="font-poppins nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* copyright footer  */}
            <div className="header-background font-poppins font-normal py-2 mt-8 text-center">
                <p className="text-gray-900 text-sm md:text-xs sm:text-xs xs:text-[10px]">© 2024 NEXUS E-RETAIL LIMITED All Rights Reserved.</p>
            </div>
        </footer>

    )
}

export default Footer