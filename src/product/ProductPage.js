import React, { useRef, useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "../header/Header";
import Nav from "../header/Nav";
import ProfileMenu from "../header/ProfileMenu";
import Footer from "../footer/Footer";
import DataContext from '../context/DataContext';

const ProductPage = () => {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();
    const { searchResult, customerId, favoriteList, setFavoriteList, bagList, setBagList } = useContext(DataContext);
    const { id } = useParams();
    const product = searchResult.find((product) => product._id === id);
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

    // handle add product in favorite list
    const handleFavoriteList = async () => {
        const productId = id;

        if (favoriteList.includes(productId)) {
            alert("Product is already in favorites!");
            navigate("/favorite");
        }
        else {
            const data = { productId, customerId };
            try {
                const response = await axios.put(`${URL}/customer/favorite/add`, data);
                if (response.data.status === "added") {
                    // add into favoriteList
                    const updateList = [...favoriteList, productId];
                    setFavoriteList(updateList);
                    navigate("/favorite");
                } 
                else if (response.data.status === "fail") {
                    alert("Something went wrong");
                }
                else{
                    alert("Sign out and try again.");
                }
            }
            catch (error) {
                console.error(error);   
            }
        }

    }

    // handle add product in bag
    const handleBagList = async () => {
        const productId = id;

        if (bagList.includes(productId)) {
            alert("Product is already in bag!");
            navigate("/bag");
        }

        else {
            const data = { productId, customerId };
            try {
                const response = await axios.put(`${URL}/customer/bag/add`, data);
                if (response.data.status === "added") {
                    // add into bagList
                    const updateList = [...bagList, productId];
                    setBagList(updateList);
                    navigate("/bag");
                } 
                else if (response.data.status === "fail") {
                    alert("Something went wrong");
                }
                else{
                    alert("Sign out and try again.");
                }
            }
            catch (error) {
                console.error(error);   
            }
        }

    }

    return (
    <div>
        {/* fixed header and nav bar  */}
        <div className="fixed w-full z-10 top-0 " ref={headerRef}>
            <Header handleProfileClick={handleProfileClick} />
            
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
                    <Link to="/home/products/all" className="hover:underline"> Products</Link>
                    &nbsp; &gt; &nbsp; 
                    <Link to={`/home/products/${product._id}`} className="hover:underline">
                        {product.name.length > 13 ? product.name.slice(0, 13) + '...' : product.name}
                    </Link>
                </p>
                {/* product all details */}
                <div className="mt-8 sm:mt-1 xs:mt-1 mb-10">
                    {/* product main information */}
                    <div className="grid place-content-center grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 sm:place-items-center xs:place-items-center">
                        {/* product image */}
                        <div className="place-self-center border-2 border-gray-400 rounded-md p-3 w-[670px] h-[670px] xl:w-[500px] xl:h-[500px] lg:w-[350px] lg:h-[350px] md:w-64 md:h-64 sm:w-64 sm:h-64 xs:w-64 xs:h-64">
                            <img src={product.photo} alt="product" className="w-full h-full object-contain" />
                        </div>
                        {/* product basic details */}
                        <div className="pl-2 flex flex-col justify-between">
                            {/* title */}
                            <h1 className="font-semibold text-justify text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm sm:mt-5 xs:mt-5">{product.name}</h1>
                            {/* price details */}
                            <div className="mt-5">
                                {product.discount === "0" && 
                                    <div>
                                        <div className="flex items-end">
                                            <p className="text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl font-semibold text-sky-900">
                                            ₹ {formatIndianNumber(product.price - (product.price * product.discount / 100))}
                                            </p>
                                        </div>
                                    </div>
                                }
                                {product.discount !== "0" &&
                                    <div>
                                        <p className="line-through text-gray-500 text-2xl lg:text-xl md:text-base sm:text-base xs:text-sm">₹ {formatIndianNumber(product.price)}</p>
                                        <div className="flex items-end">
                                            <p className="text-5xl lg:text-4xl md:text-3xl sm:text-3xl xs:text-3xl font-semibold text-sky-900">
                                            ₹ {formatIndianNumber(product.price - (product.price * product.discount / 100))}
                                            </p>
                                            <p className="text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xl ml-5 font-bold text-green-600">{product.discount}%</p>
                                        </div>
                                    </div>
                                }
                            </div>
                            {/* buttons fro add into favorite and order */}
                            <div className="mt-5 space-y-3">
                                <button 
                                    className="p-3 w-full rounded-xl hover:underline focus:underline text-white font-podkova border bg-sky-900 text-2xl md:text-xl sm:text-xl xs:text-xl"
                                    onClick={handleFavoriteList}    
                                >
                                    add to favorites
                                </button>
                                <button 
                                    className="p-3 w-full rounded-xl hover:underline focus:underline text-white font-podkova border bg-sky-900 text-2xl md:text-xl sm:text-xl xs:text-xl"
                                    onClick={handleBagList}
                                >
                                    ORDER NOW!
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* more details  */}
                    <div className="my-10 border-y border-black ">
                        <h1 className="my-4 font-bold text-2xl lg:text-xl md:text-lg sm:text-base xs:text-sm font-balsamiq-sans">MORE DETAILS</h1>
                        <h3 className="font-semibold mb-4 text-lg">
                            Seller: {product.sellerName}
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            {product.description.split('\n').map((point, index) => (
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
