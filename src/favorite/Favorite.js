import React, { useRef, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import axios from "axios";
import DataContext from '../context/DataContext';
import Header from '../header/Header';
import ProfileMenu from '../header/ProfileMenu';
import Nav from '../header/Nav';
import Footer from '../footer/Footer';

const Favorite = () => {
  const URL = process.env.REACT_APP_BACKEND_URL;
  const { customerId, products,  favoriteList, setFavoriteList } = useContext(DataContext);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};

  const filterProducts = products.filter((product) => favoriteList.includes(product._id));

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

  const handleRemoveItem = async (id) => {
    const productId = id;

    const data = { productId, customerId };
    try {
        const response = await axios.delete(`${URL}/customer/favorite/remove`, { data });
        if (response.data.status === "removed") {
            // remove favoriteList
            const updateList = favoriteList.filter(id => id !== productId);
            setFavoriteList(updateList);
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* fixed header and nav bar  */}
      <div className="fixed w-full z-10 top-0 " ref={headerRef}>
        <Header handleProfileClick={handleProfileClick}/>
        
        <div style={blurStyle}>
          <Nav  />
        </div>
        
        {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} /> }
      </div>

      {/* products list */}
      <div style={blurStyle} className="flex-1 min-h-full">
        <main className="w-full font-poppins px-6" style={{marginTop: `${headerHeight}px`}}>  
          <div className="pt-5">
            <p className="font-semibold text-3xl flex justify-center">Wish list</p>
          </div>

          {/* Items list */}
          {filterProducts.length === 0 && 
            <div className="pt-28 flex flex-col justify-center w-full items-center">
              <p className="font-semibold text-xl text-orange-700">You have not added any products yet.</p>
              <Link to="/home/products/all" className="py-3 hover:text-blue-600 hover:underline">&larr; add your favorite product</Link>
            </div>
          }
          {filterProducts.length !== 0 &&
            <div className="py-10">
              <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
                {filterProducts.map((product) => (
                  <div className="flex flex-col shadow ">
                    {/* details */}
                    <div className="h-full border-x-2 border-t-2 border-gray-400 rounded-t-xl p-2 pt-4 flex flex-col hover:bg-[#e5e7eb] hover:text-[#65a30d] focus:bg-[#e5e7eb] focus:text-[#65a30d]">
                      <Link to={`/favorite/${product._id}`}>
                        {/* add image */}
                        <div className="h-48 md:h-40 sm:h-36 xs:h-28 flex justify-center items-center">
                          <img src={product.photo} alt="product" className="h-full w-full object-contain"/>
                          {/* instead show icons */}
                          {/* <SlPicture className="text-8xl text-gray-500"/> */}
                        </div>
                        {/* price details */}
                        <div className="flex mt-4 px-2 items-end space-x-1 flex-wrap">
                          <p className="font-poppins text-3xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-sky-900">
                              ₹ {product.discount === "0" 
                                  ? formatIndianNumber(product.price) 
                                  : formatIndianNumber(product.price - (product.price * product.discount / 100))}
                          </p>
                          {product.discount !== "0" && (
                              <>
                                  <p className="font-poppins line-through text-gray-500">₹ {formatIndianNumber(product.price)}</p>
                                  <p className="font-poppins text-xl md:text-lg sm:text-base xs:text-base font-bold text-green-600">{product.discount}%</p>
                              </>
                          )}
                        </div>
                        {/* image title */}
                        <h2 className="font-poppins md:text-sm sm:text-sm xs:text-sm font-semibold mt-2 text-wrap px-2 ">
                            {product.name.length > 60 ? product.name.slice(0, 60) + '...' : product.name}
                        </h2>
                      </Link>
                    </div>
                    {/* remove button */}
                    <button 
                      className="flex items-center justify-center p-1 bg-[#E23232] text-white cursor-pointer border-2 border-gray-400 rounded-b-md"
                      onClick={() => handleRemoveItem(product._id)}
                    > 
                        <MdDelete className="h-full text-lg" />
                        <div>
                          &nbsp; Remove
                        </div>
                    </button>

                  </div>
                ))}
              </div>
            </div>
          }


        </main>
      </div>


       {/* fixed footer  */}
       <div style={blurStyle} className="mt-auto">
            <Footer/>
        </div>
    </div>
  )
}

export default Favorite;
