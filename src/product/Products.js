import React, { useRef, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Header from "../header/Header";
import Nav from "../header/Nav";
import ProfileMenu from "../header/ProfileMenu";
import Footer from "../footer/Footer";


const Products = () => {
  const { searchResult } = useContext(DataContext);
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
          <Nav />
        </div>
        {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} />}
      </div>

      {/* products list */}
      <div style={blurStyle}>
        <main className="w-full font-poppins px-6" style={{ marginTop: `${headerHeight}px` }}>
          <p className="pt-5 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
            <Link to="/home" className='hover:underline'>Home</Link>
            &nbsp; &gt; &nbsp;
            <Link to="/home/products/all" className='hover:underline'>Products</Link>
          </p>

          {/* Items list */}
          <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5 mb-10">
            {searchResult.map((product) => (
              <Link to={`/home/products/detail/${product._id}`} key={product._id}>
                <div className="h-full bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg flex flex-col item-hover">
                  {/* add image */}
                  <div className="h-48 md:h-40 sm:h-36 xs:h-28 flex justify-center items-center">
                    <img src={product.photo} alt="product" className="h-full w-full object-contain" />
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
                </div>
              </Link>
            ))}
          </div>

        </main>
      </div>

      {/* fixed footer  */}
      <div style={blurStyle}>
        <Footer />
      </div>

    </div>
  );
};

export default Products;
