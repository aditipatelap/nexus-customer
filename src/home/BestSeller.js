import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const BestSeller = () => {
  const { products } = useContext(DataContext);

  // Get 4 random products from the products array
  const getRandomProducts = () => {
    const randomProducts = [];
    const productIndices = [];

    // Generate 4 unique random indices
    while (productIndices.length < 4) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!productIndices.includes(randomIndex)) {
        productIndices.push(randomIndex);
      }
    }

    // Populate randomProducts array with selected products
    productIndices.forEach(index => {
      randomProducts.push(products[index]);
    });

    return randomProducts;

  };

  const bestSellingItems = getRandomProducts();


  // Function to format number in Indian numbering style
  const formatIndianNumber = (num) => {
    return num.toLocaleString('en-IN');
  };


  return (
    <div className="mx-6 mb-8">
      {/* Title */}
      <div className="text-[#3F3939] flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl sm:text-xl xs:text-lg text-wrap">BEST SELLER</h1>
        <Link to="/home/products/all">
          <p className="font-poppins underline text-black hover:text-blue-600">view all</p>
        </Link>
      </div>

      {/* Items list */}
      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 mt-5">
        {bestSellingItems.map((product, index) => (
            <Link to={`/home/products/detail/${product._id}`} key={index}>
              <div className="h-full bg-white border-2 border-gray-400 rounded-xl p-2 pt-4 shadow-lg flex flex-col hover:bg-[#e5e7eb] hover:text-[#65a30d] focus:bg-[#e5e7eb] focus:text-[#65a30d]">
                {/* add image */}
                <div className="h-48 md:h-40 sm:h-36 xs:h-28 flex justify-start">
                  <img src={product.photo} alt="product" className="h-full w-full object-contain" />
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

    </div>
  )
}

export default BestSeller