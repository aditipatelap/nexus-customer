import React, { useRef, useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Header from "../header/Header";
import Nav from "../header/Nav";
import ProfileMenu from "../header/ProfileMenu";
import Footer from "../footer/Footer";

const stages = ['created', 'approved', 'delivered'];

const TrackOrder = () => {
    const { orders } = useContext(DataContext);
    const { id } = useParams();
    const order = orders.find((order) => order._id === id);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};
    
    const handleProfileClick = () => {
      setIsProfileClicked(!isProfileClicked);
    };

    const formatDateTime = (dateTimeString) => {
      const createdAtDate = new Date(dateTimeString);
      const formattedDate = `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}`;
      return formattedDate;
    };
  
    const formatIndianNumber = (num) => {
      return num.toLocaleString('en-IN');
    };

    useEffect(() => {
      const updateHeaderHeight = () => {
          setHeaderHeight(headerRef.current?.offsetHeight);
      }
      
      updateHeaderHeight();

      window.addEventListener('resize', updateHeaderHeight);

      return () => {
          window.removeEventListener('resize', updateHeaderHeight);
      };

    }, [headerHeight]); 

    return (
        <div className='flex flex-col min-h-screen'>
          <div className="fixed w-full z-10 top-0 " ref={headerRef}>
            <Header handleProfileClick={handleProfileClick} />
            <div style={blurStyle}>
              <Nav />
            </div>
            {isProfileClicked && <ProfileMenu handleProfileClick={handleProfileClick} />}
          </div>
    
          <div style={blurStyle} className="flex-1 font-poppins">
            <div className="px-6 py-5" style={{ marginTop: `${headerHeight}px` }}>
              <div>
                <Link to="/order/track">
                  <div className="flex">
                    <p>&larr; &nbsp;</p>
                    <p className="underline">Back</p>
                  </div>
                </Link>
    
                <div className="flex flex-col space-y-2 border-b border-gray-500 pb-3 mt-5">
                  <p className="font-semibold text-2xl">Order ID: {order._id}</p>
                  <p>Created at: {formatDateTime(order.createdAt)}</p>
                  <p>Billing Name: {order.billName}</p>
                  <p>Contact No.: {order.billPhone}</p>
                  <p>Billing Address: {order.billAddress}</p>
                  <p>Shipping Address: {order.shipAddress}</p>
                  <p>Total Amount: ₹ {formatIndianNumber(order.totalAmount)}</p>
                </div>
                
                <div>
                  <h1 className="font-semibold text-xl underline my-3">Products Details</h1>
                  {order.productNameList.map((product, index) => (
                    <div key={index} className="my-5">
                      <p className="font-semibold">{index+1} &#41; {product}</p>
                      <div className="mx-6">
                          <p>Price: ₹ {formatIndianNumber(order.amountList[index])}</p>
                          <p>Seller: {order.sellerNameList[index]}</p>
                          <p className="underline mt-3 mb-2">Your item is here</p>
                          <div className="flex flex-col justify-between">
                            {order.stageList[index] !== "rejected" &&
                              <div>
                                {/* if order is only created */}
                                {order.stageList[index] === "created" &&
                                  <div className="px-2">
                                    <ul className="list-disc space-y-2 font-semibold text-lg">
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                          <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                        </span>
                                        <p className="text-green-500 pl-2">Created</p>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 border border-[#3F3939] rounded-full mr-2 flex items-center justify-center"></span>
                                        <p className="pl-2 text-[#3F3939]">Confirmed</p>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 border border-[#3F3939] rounded-full mr-2 flex items-center justify-center"></span>
                                        <p className="pl-2 text-[#3F3939]">Delivered</p>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                {/* if order is accepted/approved by seller */}
                                {order.stageList[index] === "approved" &&
                                  <div className="px-2">
                                    <ul className="list-disc space-y-2 font-semibold text-lg">
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                          <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                        </span>
                                        <p className="text-green-500 pl-2">Created</p>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                          <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                        </span>
                                        <p className="pl-2 text-green-500">Confirmed</p>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 border border-[#3F3939] rounded-full mr-2 flex items-center justify-center"></span>
                                        <p className="pl-2 text-[#3F3939]">Delivered</p>
                                      </li>
                                    </ul>
                                  </div>
                                }
                                {/* if order is delivered by agent */}
                                {order.stageList[index] === "delivered" &&
                                  <div className="px-2">
                                    <ul className="list-disc space-y-2 font-semibold text-lg">
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                          <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                        </span>
                                        <p className="text-green-500 pl-2">Created</p>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                          <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                        </span>
                                        <p className="pl-2 text-green-500">Confirmed</p>
                                      </li>
                                      <li className="flex items-center">
                                        <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                          <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                        </span>
                                        <p className="pl-2 text-green-500">Delivered</p>
                                      </li>
                                    </ul>
                                    <p className="mt-3 text-sm">Your item is successfully delivered at the shipping address.</p>
                                  </div>
                                }
                              </div>
                            }
                            {order.stageList[index] === "rejected" &&
                              <div className="px-2">
                                <ul className="list-disc space-y-2 font-semibold text-lg">
                                  <li className="flex items-center">
                                    <span className="w-6 h-6 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                                      <span className="text-white">&#x2714;</span> {/* Checkmark symbol */}
                                    </span>
                                    <p className="text-green-500 pl-2">Created</p>
                                  </li>
                                  <li className="flex items-center">
                                    <span className="w-6 h-6 bg-red-500 rounded-full mr-2 flex items-center justify-center">
                                      <span className="text-white">&#x2718;</span> {/* Cross symbol */}
                                    </span>
                                    <p className="text-red-500 pl-2">Rejected</p>
                                  </li>
                                </ul>
                                <p className="mt-3 text-sm">We are sorry but your order has been rejected by the seller.</p>
                              </div>
                            }
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
    
          <div style={blurStyle} className="mt-auto">
            <Footer />
          </div>
        </div>
      )
}

export default TrackOrder;
