import React from 'react'

const ProfileMenu = ({ handleProfileClick }) => {
    const menuLinks = [
        {src:"#", title:"Your Account"},
        {src:"#", title:"Track Your Order"},
        {src:"#", title:"Switch Account"},
        {src:"#", title:"Sign Out"},
        {src:"#", title:"Help Center"},
        {src:"#", title:"Contact Us"},
    ];

    return (
        <div className="fixed z-20 top-16 right-4" onMouseLeave={handleProfileClick} onWheel={handleProfileClick}>
            <div className="flex justify-end">
                <div className="flex flex-col items-start bg-white border-2 border-slate-800 rounded-md">
                    {menuLinks.map((link) => (
                            <a href={link.src} className="px-10 py-1.5 w-full h-full md:text-sm sm:text-sm xs:text-xs hover:underline hover:text-white hover:bg-sky-900">{link.title}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileMenu;
