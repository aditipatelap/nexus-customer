import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProfile from './EditProfile';
import ShowProfile from './ShowProfile';

const Profile = () => {

  // edit mode on
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="font-poppins mb-8">
      <p className="py-6 sm:py-3 xs:py-3 md:text-sm sm:text-sm xs:text-xs">
        <Link to="/home" className='hover:underline'>Home</Link>
        &nbsp; &gt; &nbsp; 
        <Link to="/account" className='hover:underline'>Your Account</Link> 
        &nbsp; &gt; &nbsp; 
        <Link to="#" className='hover:underline'>Profile</Link> 
      </p>
      {/* information mode  */}
      {!isEditing && <ShowProfile handleEditClick={handleEditClick} />}
      {/* edit mode */}
      {isEditing && <EditProfile  handleEditClick={handleEditClick} />}   
    </div>
  )
}

export default Profile
