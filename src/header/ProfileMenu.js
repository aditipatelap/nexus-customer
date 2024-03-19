import React from 'react';
import { Link } from "react-router-dom";

const ProfileMenu = ({ handleProfileClick }) => {
    const menuLinks = [
        {id:"account", src:"/account", title:"Your Account"},
        {id:"orderTrack", src:"#", title:"Track Your Order"},
        {id:"switch", src:"/", title:"Switch Account"},
        {id:"signout", src:"/", title:"Sign Out"},
        {id:"help", src:"#", title:"Help Center"},
        {id:"contact", src:"#", title:"Contact Us"},
    ];
   
    return (
        <div className="fixed z-20 top-16 right-4" onMouseLeave={handleProfileClick} onWheel={handleProfileClick}>
            <div className="flex justify-end">
                <div className="flex flex-col items-start bg-white border-2 border-slate-800 rounded-md">
                    {menuLinks.map((link) => (
                        <div key={link.id} className="px-10 py-1.5 w-full h-full font-poppins md:text-sm sm:text-sm xs:text-xs hover:underline hover:text-white hover:bg-sky-900">
                            <Link 
                                to={link.src} 
                                onClick={handleProfileClick}
                            >
                                {link.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
