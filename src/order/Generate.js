import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Generate = ({ orderData }) => {
    const navigate = useNavigate();
    const { customerId, firstName, lastName, phoneNumber, building, landmark, area, district, state, ordersList, setOrdersList, bagList, setBagList } = useContext(DataContext);
    const [billName, setBillName] = useState(firstName + " " + lastName);
    const [billPhone, setBillPhone] = useState(phoneNumber);
    const [billAddress, setBillAddress] = useState(`${building}, ${landmark}, ${area}, ${district}, ${state}.`);

    // Function to format number in Indian numbering style
    const formatIndianNumber = (num) => {
        return num.toLocaleString('en-IN');
    };

    const handleNewOrder = async () => {
        const productIdList = [];
        const productNameList  = [];
        const amountList = [];
        const totalAmount = orderData.totalAmount;
        const sellerIdList = [];
        const sellerNameList = [];
        const stageList = [];

        orderData.filterProducts.map( (product) => {
            const pid = product._id;
            productIdList.push(pid);

            const pname = product.name;
            productNameList.push(pname);

            const amount = product.discount === "0" ? product.price * 1 : product.price - (product.price * product.discount / 100);
            amountList.push(amount);

            const sid = product.sellerId;
            sellerIdList.push(sid);

            const sname = product.sellerName;
            sellerNameList.push(sname);

            const stage = "created";
            stageList.push(stage);
        })

        const orderDetails = { productIdList, productNameList, amountList, sellerIdList, sellerNameList, stageList, totalAmount, customerId, billName, billPhone, billAddress };

        try {
            // Send all product data together in a single request
            const response = await axios.post("https://nexus-backend-380o.onrender.com/order/new", orderDetails );
            if (response.data.status === "success") {
                const updateList = [...ordersList, response.data.orderId];
                setOrdersList(updateList);
                setBagList([]);
                navigate("/order/placed");
            } else if (response.data.status === "fail") {
                alert("Something went wrong");
            } else {
                alert("Sign out and try again.");
            }
        } catch (error) {
            console.log(error);
        }
    
    };
    
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center font-poppins">
            <div className="border-4 border-sky-950 rounded-lg flex flex-col p-3 px-5">
                {/* title */}
                <div className="border-b-2 border-sky-900 px-96 pb-1 font-balsamiq-sans font-bold text-2xl text-sky-900">
                    <h2 className="flex justify-center">
                        Confirm Order Details
                    </h2>
                </div>

                {/* summary */}
                <div>
                    {/* product details */}
                    <div className="flex flex-col my-3">
                    <ul className="">
                        {orderData.filterProducts.map((product) => (
                        <div className="grid grid-cols-4 ">
                            <li className="col-span-3 list-decimal ml-5 px-2 content-center" key={product._id}>
                                {product.name}
                            </li>
                            <div className="col-span-1 text-end p-2 font-semibold content-center">
                                ₹ {product.discount === "0" 
                                    ? formatIndianNumber(product.price) 
                                    : formatIndianNumber(product.price - (product.price * product.discount / 100))
                            }
                            </div>
                        </div>
                        ))}
                    </ul>
                    </div>
                    {/* Total price calculation */}
                    <div className="border-t-2 border-sky-900 w-full mb-7">
                        <div className="text-end p-2 font-semibold text-2xl flex justify-end">
                            <p className="">TOTAL: &nbsp;</p>
                            <p className="text-green-700">₹ {formatIndianNumber(orderData.totalAmount)} </p> 
                        </div>
                    </div>
                </div>

                {/* details */}
                <div className="flex flex-col space-y-4 mb-7">
                    <div className="p-1 font-medium">
                       <li className="underline">Billing Details:</li>
                    </div>
                    {/* billing name */}
                    <div className="flex w-full">
                        <label htmlFor="billname" className="text-nowrap flex items-center">Billing Name: &nbsp; </label>
                        <div className="w-full ml-2">
                            <input 
                                type="text" 
                                required
                                autoFocus = {true}
                                value={billName}
                                className="border-2 border-gray-300 rounded-sm px-2 w-full"
                                onChange={(e) => setBillName(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    {/* billing phone */}
                    <div className="flex w-full">
                        <label htmlFor="billphone" className="text-nowrap flex items-center">Contact No.: &nbsp; &nbsp; </label>
                        <div className="w-full ml-2">
                            <input 
                                type="text" 
                                required
                                value={billPhone}
                                className="border-2 border-gray-300 rounded-sm px-2 w-full"
                                onChange={(e) => setBillPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* billing address */}
                    <div className="flex flex-col w-full">
                        <label htmlFor="billadd" className="text-nowrap flex items-center w-full">Billing Address: &nbsp; </label>
                        <div className="w-full mt-1">
                            <textarea 
                                type="text" 
                                required
                                value={billAddress}
                                style={{ resize: "none" }}
                                className="border-2 border-gray-300 rounded-sm px-2 w-full h-20"
                                onChange={(e) => setBillAddress(e.target.value)}>
                            </textarea>
                        </div>
                    </div>

                </div>

                <div className="flex items-center mb-3">
                    <input 
                        id="cod"
                        type="checkbox" 
                        required
                        checked
                        className="mr-2 w-5 h-5"
                    />
                    <label htmlFor="cod" className="font-poppins font-semibold">
                        Cash On Delivery
                    </label>
                </div>

                {/* button */}
                <div className="flex flex-col pb-5">
                    <button 
                        className="w-full py-2 rounded-xl hover:underline focus:underline text-white font-podkova font-semibold border bg-sky-900 text-2xl md:text-xl sm:text-xl xs:text-xl"
                        onClick={handleNewOrder}
                    >
                        CONFIRM ORDER
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default Generate
