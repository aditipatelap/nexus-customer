import React, { createContext, useState, useEffect } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [customerId, setCustomerId] = useState();
    const [profilePic, setProfilePic] = useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState("Female");
    const [birthday, setBirthday] = useState('');
    // address
    const [building, setBuilding] = useState('');
    const [landmark, setLandmark] = useState('');
    const [area, setArea] = useState('');
    const [district, setDistrict] = useState("Ahmadabad");
    const [state, setState] = useState("Gujarat");
    const [favoriteList, setFavoriteList] = useState([]);
    const [bagList, setBagList] = useState([]);
    const [ordersList, setOrdersList] = useState([]);

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
  
    const { data, fetchError, isLoading } = useAxiosFetch("https://nexus-3g6r.onrender.com/app/get-product");

    useEffect(() => {
        setProducts(data);
    }, [data]);
    
    return (
        <DataContext.Provider value={{
            customerId, setCustomerId,
            profilePic, setProfilePic,
            firstName, setFirstName,
            lastName, setLastName,
            email, setEmail,
            password, setPassword,
            phoneNumber, setPhoneNumber,
            gender, setGender,
            birthday, setBirthday,
            building, setBuilding,
            landmark, setLandmark,
            area, setArea,
            district, setDistrict,
            state, setState,
            favoriteList, setFavoriteList,
            bagList, setBagList,
            ordersList, setOrdersList,
            
            products, fetchError, isLoading,
            search, setSearch,
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;