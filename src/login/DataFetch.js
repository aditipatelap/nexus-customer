import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataContext from '../context/DataContext';

const DataFetch = () => {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();
    const { setProducts, ordersList, setOrders, } = useContext(DataContext);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL}/product/get/all`);
                if (response.data.status === "success") {
                    setProducts(response.data.products);
                    // const orderResponse = await axios.post(`${URL}/order/track`, { ordersList });
                    // if (orderResponse.data.status === "success") {
                    //     setOrders(orderResponse.data.orders);
                        setDataFetched(true);
                        navigate("/home");
                    // } else {
                    //     alert("Something went wrong while fetching orders.");
                    // }
                } else {
                    alert("Something went wrong while fetching products.");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Something went wrong.");
            }
        };

        if (!dataFetched) {
            fetchData();
        }
    }, [dataFetched, navigate, ordersList, setOrders, setProducts]);

    return (
        <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
            {dataFetched 
                ?   <p>Data fetched successfully.</p>
                :   <p>Fetching details...</p> 
            }
        </div>
    );
};

export default DataFetch;
