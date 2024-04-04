import React, { useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Generate = ({ orderData }) => {
    const navigate = useNavigate();
    const loadingGIF = process.env.PUBLIC_URL + "/images/loading.gif"
    const { customerId, firstName, lastName, phoneNumber, building, landmark, area, district, state, ordersList, setOrdersList } = useContext(DataContext);

    const handleNewOrder = async () => {
        const customerName = firstName + lastName;
        const customerPhone = phoneNumber;
        const customerAddress = `${building}, ${landmark}, ${area}, ${district}, ${state}.`;
    
        // Create an array to hold product data
        const productsData = orderData.filterProducts.map(product => {
            const amount = product.discount === "0" ? product.price * 1 : product.price - (product.price * product.discount / 100);
            return {
                productId: product._id,
                productName: product.name,
                amount,
                sellerId: product.sellerId,
                sellerName: product.sellerName,
                customerId,
                customerName,
                customerPhone,
                customerAddress
            };
        });
    
        try {
            // Send all product data together in a single request
            const response = await axios.post("http://localhost:8000/order/new", { productsData });
            if (response.data.status === "success") {
                navigate('/order/placed');
            } else if (response.data.status === "fail") {
                alert("Something went wrong");
            } else {
                alert("Sign out and try again.");
            }
        } catch (error) {
            console.log(error);
        }
    
    };

    
    useEffect(() => {
        handleNewOrder();
    }, [])

    return (
        <div className="min-h-screen w-full flex justify-center items-center">
            <div className="flex flex-col pb-5">
                <img src={loadingGIF} alt="Loading..." className=""/>
                <p className="font-podkova font-semibold text-3xl text-center">Please wait ...</p>
            </div>
        </div>
    )
}

export default Generate
