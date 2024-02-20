import React from 'react';

const Deals = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/backgrounds";

  return (
    <div className="mx-6 mt-8">
      {/* Title */}
      <div className="color-3F3939 flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl">FLASH DEALS</h1>
      </div>

      {/* Flyers/poster */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2 bg-gray-400 rounded-xl p-5">
          <div className="h-full bg-gray-200 rounded-xl p-4" style={{backgroundImage: `url(${basePath}/bg_1.png)`}} >
            <h2 className="font-poppins text-xl font-semibold text-white  mb-2">Big Deal</h2>
            <p className="font-poppins text-base text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 text-white font-poppins py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">Shop Now</button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col items-center py-11 h-56 border-2 border-gray-400 rounded-xl" style={{backgroundImage: `url(${basePath}/bg_3.png)`, backgroundSize: 'cover', backgroundPosition: 'right bottom'}} >
            <h2 className="font-poppins text-xl font-semibold mb-2">Small Deal 1</h2>
            <p className="font-poppins text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 text-white font-poppins py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">Shop Now</button>
          </div>

          <div className="border-2 border-gray-400 p-4 rounded-xl mt-4" style={{backgroundImage: `url(${basePath}/bg_4.png)`, backgroundSize: 'cover'}}>
            <h2 className="font-poppins text-xl font-semibold mb-2">Small Deal 2</h2>
            <p className="font-poppins text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 text-white font-poppins py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;