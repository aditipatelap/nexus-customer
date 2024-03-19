import React from 'react';
import { Link } from 'react-router-dom';

const Coupons = () => {
  const basePath = process.env.PUBLIC_URL + "/images/photo/backgrounds";

  const couponsList = [
    {title:"20% OFF", code:"#FY4D35", valid:"23/03/24", image:""},
    {title:"₹500 OFF", code:"#FO34FT", valid:"10/04/24", image:""},
    {title:"10% OFF", code:"#QWDFG4", valid:"23/07/24", image:""},
    {title:"60-70% OFF", code:"#HUNJFG", valid:"28/03/24", image:""},
    {title:"₹110 OFF", code:"#GHO6GH", valid:"23/08/24", image:""},
    {title:"20% OFF", code:"#SYHN67", valid:"31/03/24", image:""},
    {title:"₹1500-2000 OFF", code:"#ZSWI92", valid:"02/04/24", image:""},
  ];

  return (
    <div className="font-poppins mb-8">
      <p className="py-6 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
        <Link to="/home" className='hover:underline'>Home</Link>
        &nbsp; &gt; &nbsp; 
        <Link to="/account" className='hover:underline'>Your Account</Link> 
        &nbsp; &gt; &nbsp; 
        <Link to="#" className='hover:underline'>Coupons/ Rewards</Link> 
      </p>
      <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3 md:mt-2 gap-3">
        {couponsList.map((coupon) => (
          <div className="border border-black rounded-lg p-3 space-y-1" style={{backgroundImage: `url(${basePath}/bg_2.png)`, backgroundSize: 'cover'}}>
            <h1 className="font-semibold text-4xl lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl">{coupon.title}</h1>
            <h3 className="font-semibold text-xl md:text-lg sm:text-base xs:text-sm">{coupon.code}</h3>
            <p className="md:text-base sm:text-sm xs:text-xs">valid till {coupon.valid}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coupons
