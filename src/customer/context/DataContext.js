import React, { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    // const [searchResult , setSearchResult] = useState([]);
    const { data, fetchError, isLoading } = useAxiosFetch("/get-product");


    useEffect(() => {
        setProducts(data);
    }, [data]);

    // useEffect(() => {
    //     const filterProducts = products.filter((product) => (
    //     product.title.toLowerCase().includes(search.toLowerCase())
    //     || post.body.toLowerCase().includes(search.toLowerCase())
    //     ))
    //     // reverse will show the latest post first
    //     setSearchResult(filterPosts.reverse());

    // }, [posts, search]);

    return (
        <DataContext.Provider value={{
            products,
            search, setSearch,
            fetchError, isLoading,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;