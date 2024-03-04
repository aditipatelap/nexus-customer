import React, { createContext, useState, useEffect } from 'react';
import useAxiosFetchAllProducts from '../../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
  
    const { data, fetchError, isLoading } = useAxiosFetchAllProducts("https://nexus-3g6r.onrender.com/app/get-product");

    useEffect(() => {
        setProducts(data);
    }, [data]);


    return (
        <DataContext.Provider value={{
            products, fetchError, isLoading,
            search, setSearch,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;
