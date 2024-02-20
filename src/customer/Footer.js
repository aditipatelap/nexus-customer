import React from 'react'

const Footer = () => {
    const basePath = process.env.PUBLIC_URL + "/images/logo";

    const quickLinks = [
        {name: "About Us", href: "#"},
        {name: "Contact Us", href: "#"},
        {name: "Customer Services", href: "#"},
        {name: "Terms & Conditions", href: "#"},
        {name: "Become a Seller", href: "#"}
    ];

    const categoryLinks1 = [
        {name: "Fashion", href: "#"},
        {name: "Personal Care", href: "#"},
        {name: "Electronics", href: "#"},
        {name: "Books", href: "#"},
        {name: "Sports", href: "#"}
    ];

    const categoryLinks2 = [
        {name: "Grocery", href: "#"},
        {name: "Travel", href: "#"},
        {name: "Office Supplies", href: "#"},
        {name: "Maternity", href: "#"},
        {name: "Health", href: "#"},
        {name: "Pet", href: "#"}
    ];

    const socialLinks = [
        {name: "Facebook", href: "#"},
        {name: "Instagram", href: "#"},
        {name: "Twitter", href: "#"},
        {name: "YouTube", href: "#"}
    ];
    
    return (

        <footer className="bg-sky-900 text-white">
            <div className="grid grid-cols-5 place-items-center mx-6 mt-10 py-5">
                {/* Logo + Address */}
                <div className="">
                    <a href="#">
                        <img src={basePath + "/name_1x.png"} alt="nexus" className="p-8 pl-0" />
                    </a>
                    <div className="flex flex-col space-y-1">
                        <p className="font-poppins font-normal text-sm ">
                            nexus building, uajala circle, Thaltej, Ahmedabad, Gujarat - 382444. <br />
                            GST:- 3232FCYVYV2312312 <br />
                        </p>
                        <a href="#" className="underline hover:text-sky-400">nexushere@nexus.com </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="">
                    <ul className="space-y-3"> 
                        {quickLinks.map((link) => (
                            <li className="font-poppins text-lg nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories Links 1*/}
                <div className="">
                    <h2 className="font-poppins text-2xl font-semibold mb-2">CATEGORIES</h2>
                    <ul className="item-center space-y-2 px-3"> 
                        {categoryLinks1.map((link) => (
                            <li className="font-poppins font-normal text-sm nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories Links 2*/}
                <div className="">
                    <ul className="item-center space-y-3"> 
                        {categoryLinks2.map((link) => (
                            <li className="font-poppins font-normal text-sm nav-link text-wrap">
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
                            <li className="font-poppins font-normal text-sm nav-link text-wrap">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* copyright footer  */}
            <div className="header-background font-poppins font-normal py-2 mt-8 text-center">
                <p className="text-gray-900 text-bold">© 2024, nexus.com</p>
            </div>
        </footer>

    )
}

export default Footer