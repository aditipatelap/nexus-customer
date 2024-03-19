import React, { useRef, useContext, useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Header from "../header/Header";
import Nav from "../header/Nav";
import ProfileMenu from "../header/ProfileMenu";
import Footer from "../footer/Footer";
import DataContext from '../context/DataContext';

const ProductPage = () => {
    const { products } = useContext(DataContext);
    const { id } = useParams();
    const product = products.find((product) => product.productId === id);
    const photoPath = process.env.PUBLIC_URL + "/images/photo/products/product.png";
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};

    const handleProfileClick = () => {
        setIsProfileClicked(!isProfileClicked);
    };

    // get the header height means height of header+nav bar
    useEffect(() => {
        const updateHeaderHeight = () => {
            setHeaderHeight(headerRef.current?.offsetHeight);
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

    // Function to format number in Indian numbering style
    const formatIndianNumber = (num) => {
        return num.toLocaleString('en-IN');
    };

    return (
    <div>
        {/* fixed header and nav bar  */}
        <div className="fixed w-full z-10 top-0 " ref={headerRef}>
        <Header 
        handleProfileClick={handleProfileClick}
        />
        <div style={blurStyle}>
        <Nav  />
        </div>
        {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} /> }
        </div>

        {/* product details  */}
        <div style={blurStyle}>
            <div className="w-full font-poppins px-6" style={{marginTop: `${headerHeight}px`}}>
                <p className="pt-5 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
                    <Link to="/home" className="hover:underline">Home</Link>
                    &nbsp; &gt; &nbsp; 
                    <Link to="/home/products" className="hover:underline"> Products</Link>
                    &nbsp; &gt; &nbsp; 
                    <Link to={`/home/products/${product.productId}`} className="hover:underline">
                        {product.productName.length > 13 ? product.productName.slice(0, 13) + '...' : product.productName}
                    </Link>
                </p>
                {/* product all details */}
                <div className="mt-8 sm:mt-1 xs:mt-1 mb-10">
                    {/* product main information */}
                    <div className="grid place-content-center grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 sm:place-items-center xs:place-items-center">
                        {/* product image */}
                        <div className="place-self-center border-2 border-gray-400 rounded-md p-3 max-w-[670px] max-h-[670px] xl:max-w-[500px] xl:max-h-[500px] lg:max-w-[350px] lg:max-h-[350px] md:max-w-64 md:max-h-64 sm:max-w-64 sm:max-h-64 xs:max-w-64 xs:max-h-64">
                            <img src={photoPath} alt="product photo" className="w-full h-full object-contain" />
                        </div>
                        {/* product basic details */}
                        <div className="pl-2 flex flex-col justify-evenly">
                            {/* title */}
                            <h1 className="font-semibold text-justify text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm sm:mt-5 xs:mt-5">{product.productName}</h1>
                            {/* price details */}
                            <div className="mt-5">
                                <p className="line-through text-gray-500 text-2xl lg:text-xl md:text-base sm:text-base xs:text-sm">₹ {formatIndianNumber(product.price)}</p>
                                <div className="flex items-end">
                                    <p className="text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl font-semibold text-sky-900">
                                    ₹ {formatIndianNumber(product.price - (product.price * product.discountAmount / 100))}
                                    </p>
                                    <p className="text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xl ml-5 font-bold text-green-600">{product.discountAmount}%</p>
                                </div>
                            </div>
                            {/* buttons fro add into favorite and order */}
                            <div className="mt-5 space-y-3">
                                <button className="p-3 w-full rounded-xl hover:underline focus:underline text-white font-podkova border bg-sky-900 text-2xl md:text-xl sm:text-xl xs:text-xl">
                                    add to favorites
                                </button>
                                <button className="p-3 w-full rounded-xl hover:underline focus:underline text-white font-podkova border bg-sky-900 text-2xl md:text-xl sm:text-xl xs:text-xl">
                                    ORDER NOW!
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* more details  */}
                    <div className=" my-10 border-y border-black ">
                        <h1 className="my-4 font-bold text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-balsamiq-sans">MORE DETAILS</h1>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            {product.productDescription.split('\n').map((point, index) => (
                            <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        {/* fixed footer  */}
        <div style={blurStyle}>
            <Footer/>
        </div>
    </div>
  )
}

export default ProductPage
