import React, { createContext, useState } from 'react';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const basePath = process.env.PUBLIC_URL + "/images/photo/profilePic/person_1.jpeg";

    const [profilePic, setProfilePic] = useState("");
    const [firstName, setFirstName] = useState("Meera");
    const [lastName, setLastName] = useState("Gupta");
    const [email, setEmail] = useState("meeragupta2002@gmail.com");
    const [password, setPassword] = useState("meeraHere@2002");
    const [phoneNumber, setPhoneNumber] = useState("9923456890");
    const [gender, setGender] = useState("female");
    const [birthday, setBirthday] = useState("11-11-2011");
    // address
    const [building, setBuilding] = useState("B-1023, Swastik Arcade");
    const [landmark, setLandmark] = useState("Opp. Income tax bhavan, RJ Road");
    const [area, setArea] = useState("phalsham");
    const [district, setDistrict] = useState("Tirupati");
    const [state, setState] = useState("Andhra Pradesh");

    return (
        <DataContext.Provider value={{
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
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;