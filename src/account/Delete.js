import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DataContext from '../context/DataContext';

const Delete = () => {
  const URL = process.env.REACT_APP_BACKEND_URL;
  const [ textInput, setTextInput ]  = useState("");
  const navigate = useNavigate();
  const { 
    setCustomerId, setProfilePic, setFirstName, setLastName, 
    email, setEmail, setPassword, setPhoneNumber, setGender, setBirthday, 
    setBuilding, setLandmark, setArea, setDistrict, setState,
    setFavoriteList, setBagList, setOrdersList,
  } = useContext(DataContext);


  const handleUserData = () => {
    setCustomerId();
    setProfilePic();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setGender('');
    setBirthday('');
    setBuilding('');
    setLandmark('');
    setArea('');
    setDistrict('');
    setState('');
    setFavoriteList([]);
    setBagList([]);
    setOrdersList([]);
 }

  const handleDelete = async () => {
    if (textInput === "DELETE") {
      try {
        const response = await axios.delete(`${URL}/customer/delete`, { data: { email } });
        if (response.data.status === "deleted") {
          handleUserData();
          alert("Your Account has been deleted");
          navigate("/");
        }
        else if (response.data.status === "fail") {
          alert("Something went wrong");
      }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="font-poppins mb-8">
      <form id="deleteCustomerDetails" action="POST" onSubmit={(e) => e.preventDefault()}>
        <p className="py-6 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
          <Link to="/home" className='hover:underline'>Home</Link>
          &nbsp; &gt; &nbsp; 
          <Link to="/account" className='hover:underline'>Your Account</Link> 
          &nbsp; &gt; &nbsp; 
          <Link to="#" className='hover:underline'>Delete Account</Link> 
        </p>
        <div className="mt-3 md:mt-2 flex flex-col">
          <h1 className="font-balsamiq-sans font-bold text-[#E23232] text-3xl md:text-2xl sm:text-2xl xs:text-2xl border-b-2 border-[#E23232] pl-2 pb-2">DELETE  ACCOUNT</h1>
          <p className="mt-2 text-gray-500 md:text-sm sm:text-xs xs:text-xs">Deleting your account will remove all your information from our database. This cannot be undone.</p>
          <p className="mt-8 text-gray-400 md:text-sm sm:text-xs xs:text-xs">To confirm this, type “DELETE”</p>
          <input 
            type="text"
            required
            value={textInput}
            className="w-96 p-1 md:w-60 sm:w-64 xs:w-60 h-7 mt-3 border rounded-sm border-[#E23232]"
            onChange={(e) => setTextInput(e.target.value) }
          />
          <button 
              type="submit"
              className="font-balsamiq-sans mt-8 px-20 py-3 md:px-14 md:py-2 sm:px-14 sm:py-2 xs:px-14 xs:py-2 w-fit rounded-lg shadow-md text-2xl md:text-xl sm:text-xl xs:text-xl border border-[#E23232]"
              onClick={() => handleDelete()}
              style={{ backgroundColor: textInput === "DELETE" ? '#E23232' : '#FFFFFF', color: textInput === "DELETE" ? 'white' : 'black' }}
          >
              SAVE
          </button>
        </div>
      </form>
    </div>
  )
}

export default Delete
