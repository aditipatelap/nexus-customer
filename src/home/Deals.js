import React from 'react';
import { Link } from 'react-router-dom';

const Deals = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/backgrounds";

  return (
    <div className="mx-6 mb-8">
      {/* Title */}
      <div className="color-3F3939 flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl sm:text-xl xs:text-lg">FLASH DEALS</h1>
      </div>

      {/* Flyers/poster */}
      <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-5 mt-5">
        <div className="col-span-2 md:col-span-1 sm:col-span-1 xs:col-span-1 bg-gray-400 rounded-xl p-5 sm:p-2 xs:p-2">
          <div className="h-full bg-gray-200 rounded-xl p-4 md:pb-44 sm:pb-40 xs:pb-40" style={{backgroundImage: `url(${basePath}/bg_1.png)`}} >
            <h2 className="font-poppins text-xl sm:text-lg xs:text-base font-semibold text-white mb-2">Big Deal</h2>
            <p className="font-poppins text-base sm:text-sm xs:text-xs text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/home/products">
              <button className="bg-blue-500 text-white font-poppins py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">Shop Now</button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-3">
          <div className=" border-2 border-gray-400 p-4 rounded-xl md:mt-0" style={{backgroundImage: `url(${basePath}/bg_3.png)`, backgroundSize: 'cover'}}>
            <h2 className="font-poppins text-xl sm:text-lg xs:text-base font-semibold mb-2">Small Deal 1</h2>
            <p className="font-poppins text-sm sm:text-xs xs:text-xs mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/home/products">
              <button className="bg-blue-500 text-white font-poppins py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">Shop Now</button>
            </Link>
          </div>

          <div className="border-2 border-gray-400 p-4 rounded-xl mt-4 md:mt-0" style={{backgroundImage: `url(${basePath}/bg_4.png)`, backgroundSize: 'cover'}}>
            <h2 className="font-poppins text-xl sm:text-lg xs:text-base font-semibold mb-2">Small Deal 2</h2>
            <p className="font-poppins text-sm sm:text-xs xs:text-xs mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/home/products">
              <button className="bg-blue-500 text-white font-poppins py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;