import React from 'react'

const BrandBag = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/brands";

  const brandList = [
    {name: "Apple", logo: basePath + "/apple.png"},
    {name: "BoAt", logo: basePath + "/boat.png"},
    {name: "Chanel", logo: basePath + "/chanel.png"},
    {name: "Gucci", logo: basePath + "/gucci.png"},
    {name: "Nykaa", logo: basePath + "/nykaa.png"},
    {name: "Patagonia", logo: basePath + "/patagonia.png"},
    {name: "Peloton", logo: basePath + "/peloton.png"},
    {name: "Tesla", logo: basePath + "/tesla.png"}
  ];

  return (
    <div className="mx-6 mt-8">
      {/* Title */}
      <div className="color-3F3939 flex flex-row justify-between">
        <h1 className="font-balsamiq-sans font-bold text-2xl">BRAND TO BAG</h1>
        <a href="#">
          <p className="font-poppins underline text-black hover:text-blue-600">view all</p>
        </a>
      </div>
      {/* brand logo and it's name*/}
      <div className="grid grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-5 mt-5">
        {brandList.map((brand, id) => (
          <a href="#">
            <div key={id} className="bg-white border-2 border-gray-400 rounded-xl p-4 shadow-lg h-44 md:h-40 sm:h-36 xs:h-32 brand-hover">
                <img src={brand.logo} alt={brand.name} title={"Brand: " + brand.name} className="h-full w-full object-contain" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BrandBag