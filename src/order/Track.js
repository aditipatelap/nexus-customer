import React, { useRef, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Header from "../header/Header";
import Nav from "../header/Nav";
import ProfileMenu from "../header/ProfileMenu";
import Footer from "../footer/Footer";


const Track = () => {
  const URL = process.env.REACT_APP_BACKEND_URL;
    const { setSearch, ordersList, orders, setOrders } = useContext(DataContext);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const blurStyle = isProfileClicked ? { filter: 'blur(5px)' } : {};
    const [dataFetched, setDataFetched] = useState(false);
    
    const handleProfileClick = () => {
      setIsProfileClicked(!isProfileClicked);
    };
    
    const formatDateTime = (dateTimeString) => {
      const createdAtDate = new Date(dateTimeString);
      const formattedDate = `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}`;
      return formattedDate;
    };
  
    // Function to format number in Indian numbering style
    const formatIndianNumber = (num) => {
      return num.toLocaleString('en-IN');
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

    useEffect(() => {
      setSearch('');
    }, [])

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.post(`${URL}/order/track`, { ordersList });
              if (response.data.status === "success") {
                setOrders(response.data.orders);
                setDataFetched(true);
              }
              else {
                  alert("Something went wrong while fetching products.");
              }
          } catch (error) {
              console.error("Error fetching data:", error);
              alert("Something went wrong.");
          }
      };

      if (!dataFetched) {
          fetchData();
          console.log(orders);
      }
  }, [dataFetched, ordersList]);

    
    
  return (
    <div className='flex flex-col min-h-screen'>
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
      <div style={blurStyle} className="flex-1 font-poppins">
        <div  style={{ marginTop: `${headerHeight}px` }}>
          {!dataFetched 
              ?   
                <p className="min-h-60 flex justify-center items-center text-2xl font-semibold">Fetching details...</p> 
              :   
                orders.length === 0
                ?
                  <p className="min-h-80 flex justify-center items-center text-2xl font-semibold text-orange-700">You have not added any order yet.</p>
                :
                  <div className="px-6 py-5 w-full h-full flex flex-col space-y-5">
                    {orders.map((order) => (
                      <Link to={`/order/track/${order._id}`} key={order._id}>
                        <div className="p-5 border-2 border-gray-600 rounded-md hover:bg-[#e5e7eb] focus:bg-[#e5e7eb] flex flex-col">
                          <h1 className="font-semibold text-xl mb-1">Order ID: {order._id}</h1>
                          <h1 className="text-xs mb-2">Created at: {formatDateTime(order.createdAt)}</h1>
                          
                          <table className="w-full border-collapse border border-gray-400">
                            <thead>
                              <tr>
                                <th className="px-2 py-1 border border-gray-400 text-center">No.</th>
                                <th className="px-2 py-1 border border-gray-400 text-center">Name</th>
                                <th className="px-2 py-1 border border-gray-400 text-center">Status</th>
                                <th className="px-2 py-1 border border-gray-400 text-center">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.productNameList.map((product, index) => (
                                <tr key={index}>
                                  <td className="px-2 py-1 border border-gray-400 text-center">{index + 1}</td>
                                  <td className="px-2 py-1 border border-gray-400 text-left text-wrap">{product}</td>
                                  {/* Assuming status is available as order.statusList */}
                                  <td className="px-2 py-1 border border-gray-400 text-center">{order.stageList[index]}</td>
                                  <td className="px-2 py-1 border border-gray-400 text-center text-nowrap">₹ {formatIndianNumber(parseFloat(order.amountList[index]))}</td>
                                </tr>
                              ))}
  
                              {/* Last row for total amount */}
                              <tr>
                                <td colSpan="3" className="px-2 py-1 border border-gray-400 text-right">Total:</td>
                                <td className="px-2 py-1 border border-gray-400 text-center">₹ {formatIndianNumber(parseFloat(order.totalAmount))}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Link>
                    ))}
                    
                  </div>
          }
        </div>
        
      </div>

      {/* fixed footer  */}
      <div style={blurStyle} className="mt-auto">
        <Footer />
      </div>

    </div>
  )
}

export default Track
