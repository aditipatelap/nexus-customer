import React, { useState, useContext } from 'react';
import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';
import DataContext from './DataContext';

const Profile = () => {
  const {
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
  } = useContext(DataContext);

  const detailsBunch = [
    {id:"firstName", value:firstName, method:setFirstName, label:"First Name", type:"text"},
    {id:"lastName", value:lastName, method:setLastName, label:"Last Name", type:"text"},
    {id:"email", value:email, method:setEmail, label:"Email", type:"text"},
    {id:"password", value:password, method:setPassword, label:"Password", type:"text"},
    {id:"phoneNumber", value:phoneNumber, method:setPhoneNumber, label:"Phone Number", type:"text"},
    {id:"gender", value:gender, method:setGender, label:"Gender", type:"select"},
    {id:"birthday", value:birthday, method:setBirthday, label:"Birthday", type:"text"},
    // address 
    {id:"building", value:building, method:setBuilding, label:"Building no. & name", type:"text"},
    {id:"landmark", value:landmark, method:setLandmark, label:"Landmark", type:"text"},
    {id:"area", value:area, method:setArea, label:"Area/Street", type:"text"},
    {id:"district", value:district, method:setDistrict, label:"District", type:"select"},
    {id:"state", value:state, method:setState, label:"State", type:"select"},
];

  // edit mode on
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="font-poppins mb-8">
      <p className="py-6 sm:py-3 xs:py-3">Your Account &gt; Profile </p>
      {/* information mode  */}
      {!isEditing && <ShowProfile handleEditClick={handleEditClick} detailsBunch={detailsBunch} />}
      {/* edit mode */}
      {isEditing && <EditProfile  handleEditClick={handleEditClick} detailsBunch={detailsBunch} />}      
    </div>
  )
}

export default Profile
