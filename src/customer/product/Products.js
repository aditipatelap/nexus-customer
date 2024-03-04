import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SlPicture } from "react-icons/sl";
import DataContext from '../context/DataContext';

const Products = ({ headerHeight }) => {
  const { products, fetchError, isLoading } = useContext(DataContext);
  const photoPath = process.env.PUBLIC_URL + "/images/photo/products/product.png";

  // Function to format number in Indian numbering style
  const formatIndianNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <main className="w-full font-poppins px-6" style={{marginTop: `${headerHeight}px`}}>
      <p className="pt-5 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
        <Link to="/" className='hover:underline'>Home</Link>
        &nbsp; &gt; &nbsp; 
        <Link to="/home/products" className='hover:underline'>Products</Link> 
      </p>
      
      {/* Items list */}
      {/* is data is loading */}
      {isLoading && 
        <p className="mt-5">Still Loading...</p>
      }
      {/* not loading but get error */}
      {!isLoading && fetchError &&
        <p className="mt-5 text-[#E23232]">{fetchError}</p>
      }
      {/* no error and loading is complete */}
      {!isLoading && !fetchError && 
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5 mb-10">
          {products.map((product) => (
            <Link to={`/home/products/${product.productId}`} key={product.productId}>
              <div className="h-full bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg flex flex-col item-hover">
                {/* add image */}
                <div className="h-48 md:h-40 sm:h-36 xs:h-28 flex justify-center items-center">
                  <img src={photoPath} alt="product" className="h-full w-full object-contain"/>
                  {/* instead show icons */}
                  {/* <SlPicture className="text-8xl text-gray-500"/> */}
                </div>
                {/* price details */}
                <div className="flex mt-4 px-2 items-end space-x-1 flex-wrap">
                    <p className="font-poppins text-3xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-sky-900">
                      ₹ {formatIndianNumber(product.price - (product.price * product.discountAmount / 100))}
                    </p>
                    <p className="font-poppins line-through text-gray-500">₹ {formatIndianNumber(product.price)}</p>
                    <p className="font-poppins text-xl md:text-lg sm:text-base xs:text-base font-bold text-green-600">{product.discountAmount}%</p>
                </div>
                {/* image title */}
                <h2 className="font-poppins md:text-sm sm:text-sm xs:text-sm font-semibold mt-2 text-wrap px-2 ">
                    {product.productName.length > 60 ? product.productName.slice(0, 60) + '...' : product.productName}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      }
    </main>


  );
};

export default Products;
