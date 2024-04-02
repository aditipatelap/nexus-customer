import React from 'react';
import { Link } from 'react-router-dom';


const BrandBag = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/brands";

  const brandList = [
    {id: 1, name: "Apple", logo: basePath + "/apple.png"},
    {id: 2, name: "BoAt", logo: basePath + "/boat.png"},
    {id: 3, name: "Chanel", logo: basePath + "/chanel.png"},
    {id: 4, name: "Gucci", logo: basePath + "/gucci.png"},
    {id: 5, name: "Nykaa", logo: basePath + "/nykaa.png"},
    {id: 6, name: "Patagonia", logo: basePath + "/patagonia.png"},
    {id: 7, name: "Peloton", logo: basePath + "/peloton.png"},
    {id: 8, name: "Tesla", logo: basePath + "/tesla.png"}
  ];

  return (
    <div className="mx-6 mb-8">
      {/* Title */}
      <div className="text-[#3F3939] flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl">BRAND TO BAG</h1>
        <a href="#">
          <p className="font-poppins underline text-black hover:text-blue-600">view all</p>
        </a>
      </div>
      {/* brand logo and it's name*/}
      <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-5 mt-5">
        {brandList.map((brand) => (
          <Link to="/home/products" key={brand.id}>
            <div className="bg-white border-2 border-gray-400 rounded-xl p-4 shadow-lg h-44 md:h-40 sm:h-36 xs:h-32 hover:bg-[#e5e7eb] focus:bg-[#e5e7eb]">
                <img src={brand.logo} alt={brand.name} title={"Brand: " + brand.name} className="h-full w-full object-contain" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrandBag