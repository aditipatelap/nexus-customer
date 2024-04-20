import React, { useContext, useState } from 'react';
import axios from "axios";
import { TbCameraPlus } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DataContext from '../context/DataContext';
import { genderList, statesList, districtsList, formatDateForDisplay, formatDateForStorage } from '../dataLists';

const EditProfile = ({ handleEditClick }) => {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const {
        setCustomerId,
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

    const [ firstNameError, setFirstNameError ] = useState('');
    const [ lastNameError, setLastNameError ] = useState('');
    const [ buildingError, setBuildingError ] = useState('');
    const [ landmarkError, setLandmarkError ] = useState('');
    const [ areaError, setAreaError ] = useState('');
    const [ PhoneNumberError, setPhoneNumberError ] = useState('');
    const [ passwordError, setPasswordError ] = useState('');
    const [ validPassword, setValidPassword ] = useState(true);
    const [ birthdayError, setBirthdayError ] = useState('');

    const detailsBunch = [
        { id: "firstName", value: firstName, method: setFirstName, placeholder: "First Name", type: "text", maxLength: 50 },
        { id: "lastName", value: lastName, method: setLastName, placeholder: "Last Name", type: "text", maxLength: 50 },
        { id: "email", value: email, method: setEmail, placeholder: "Email", type: "text" },
        { id: "password", value: password, method: setPassword, placeholder: "Password", type: "text" },
        { id: "phoneNumber", value: phoneNumber, method: setPhoneNumber, placeholder: "Phone Number", type: "text" },
        { id: "gender", value: gender, method: setGender, placeholder: "Gender", type: "select" },
        { id: "birthday", value: birthday, method: setBirthday, placeholder: "Birthday", type: "date" },

        // address 
        { id: "building", value: building, method: setBuilding, placeholder: "Building no. & name", type: "text", maxLength: 100 },
        { id: "landmark", value: landmark, method: setLandmark, placeholder: "Landmark", type: "text", maxLength: 100 },
        { id: "area", value: area, method: setArea, placeholder: "Area/Street", type: "text", maxLength: 100 },
        { id: "state", value: state, method: setState, placeholder: "State", type: "select" },
        { id: "district", value: district, method: setDistrict, placeholder: "District", type: "select" },
    ];

    const handleInputChange = (id, value) => {
        switch (id) {
            case "firstName":
                setFirstName(value);
                setFirstNameError('');
                break;
            case "lastName":
                setLastName(value);
                setLastNameError('');
                break;
            case "building":
                setBuilding(value);
                setBuildingError('');
                break;
            case "landmark":
                setLandmark(value);
                setLandmarkError('');
                break;
            case "area":
                setArea(value);
                setAreaError('');
                break;
            case "phoneNumber":
                // Remove non-digit characters
                const input = value.replace(/\D/g, ''); 
                // Limit input to first 10 characters
                const truncatedInput = input.substring(0, 10);
                // Check if the input consists of leading zeros or all zeros
                if (/^0[0-9]*$/.test(truncatedInput) || /^0+$/.test(truncatedInput)) {
                    setPhoneNumberError('Invalid phone number');
                } else {
                    setPhoneNumber(truncatedInput);
                    setPhoneNumberError('');
                }
                break;
            case "password":
                setPassword(value);
                validatePassword(value);
                break;
            case "birthday":
                setBirthday(value);
                setBirthdayError(value.length === 10 ? '' : 'required*');
            default:
                break;
        }
    };

    const validatePassword = (password) => {
        if( password.length === 0 ) {
            setPasswordError('');
            return;
        }
        const regexLength = /.{8,}/;
        const regexUppercase = /[A-Z]/;
        const regexLowercase = /[a-z]/;
        const regexNumber = /\d/;
        const regexSpecialChar = /[@$!#%*?&]/;
    
        let isValidLength = regexLength.test(password);
        let hasUppercase = regexUppercase.test(password);
        let hasLowercase = regexLowercase.test(password);
        let hasNumber = regexNumber.test(password);
        let hasSpecialChar = regexSpecialChar.test(password);
    
        // Showing each condition in green only when fulfilled
        setPasswordError(
            <div className="flex flex-col ml-1 my-1">
                <p className={isValidLength ? 'text-green-500' : 'text-red-500'}>Password must be at least 8 characters long.</p>
                <p className={(hasUppercase && hasLowercase && hasNumber) ? 'text-green-500' : 'text-red-500'}>It contain at least one uppercase letter, one lowercase letter, one number.</p>
                <p className={hasSpecialChar ? 'text-green-500' : 'text-red-500'}>It must contain at least one special character (!, @, #, $, etc.).</p>
            </div>
        );

        if(isValidLength && hasUppercase & hasLowercase && hasNumber && hasSpecialChar){
            setValidPassword(true);
        }
        else{
            setValidPassword(false);
        }
    };

    const handleUserData = (user) => {
        setCustomerId(user._id);
        setProfilePic(user.profilePic);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setPassword(user.password);
        setPhoneNumber(user.phoneNumber);
        setGender(user.gender);
        setBirthday(user.birthday);
        setBuilding(user.building);
        setLandmark(user.landmark);
        setArea(user.area);
        setDistrict(user.district);
        setState(user.state);
    }

    const handleEditProfile = async () => {

        // validation
        if (firstName.length === 0) {
            setFirstNameError('required*');
            return;
        }
        if (lastName.length === 0) {
            setLastNameError('required*');
            return;
        }
        if (password.length === 0) {
            setPasswordError(
                <div className="flex flex-col ml-1 my-1">
                    <p className='text-red-500'>required*</p>
                </div>
            );
            return;
        }
        if (!validPassword){
            return;
        }
        if (phoneNumber.length !== 10) {
            setPhoneNumberError('Phone number must be 10 digits.');
            return;
        }

        if (building.length === 0) {
            setBuildingError('required*');
            return;
        }
       
        if (landmark.length === 0) {
            setLandmarkError('required*');
            return;
        }

        if (area.length === 0) {
            setAreaError('required*');
            return;
        }

        const data = { profilePic, firstName, lastName, email, password, phoneNumber, gender, birthday, building, landmark, area, district, state };
        
        try {  
            const response = await axios.put(`${URL}/customer/update/profile`, data);
            if(response.data.status === "updated") {
                alert("Your profile has been updated");
                handleUserData(response.data.user);
                handleEditClick();
            }
            else if (response.data.status === "fail") {
                alert("Something went wrong");
                handleEditClick();
            }
        }
        catch (error) {
            console.error(error);
            handleEditClick();
        }
    }

    const handleDeleteProfilePic = () => {
        setProfilePic("");
    }

    const convertToBase64 = (e) => {
        const file = e.target.files[0];
        const maxSizeInBytes = 100 * 1024; // 100 KB
        if (file && file.size <= maxSizeInBytes) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setProfilePic(reader.result); // base64encoded string
            }
            reader.onerror = (error) => {
                console.error(error);
            }
        } 
        else {
            alert('Please select an image smaller than 100 KB.');
            // Clear the input value to allow the user to select another file
            e.target.value = null;
        }
    }
    
    return (
        <div>
            <form id="editCustomerDetails" action="POST" onSubmit={(e) => e.preventDefault()}>
                {/* profile picture  */}
                <div className=" flex flex-col items-center w-full">
                    {!profilePic && 
                        <div className="relative border-4 border-black rounded-full">
                            <div className="bg-slate-300 p-16 md:p-12 sm:p-10 xs:p-9 rounded-full">
                                <TbCameraPlus className="text-6xl" />
                            </div>
                            <div className="absolute bottom-2 right-2 md:bottom-1 md:right-1 sm:bottom-1 sm:right-1 xs:bottom-1 xs:right-1 bg-black p-2 rounded-full">
                            <label htmlFor="fileInput" className="cursor-pointer">
                                <FaEdit className="text-white" />
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                onChange={convertToBase64}
                                className="hidden"
                            />
                            </div>
                        </div>
                    }
                    {profilePic &&
                        <div className="relative border-4 border-black rounded-full">
                            <div className="h-48 w-48 md:h-40 md:w-40 sm:h-40 sm:w-40 xs:h-40 xs:w-40 rounded-full overflow-hidden">
                                <img src={profilePic} alt=""  className="bg-slate-400 w-full h-full object-cover"/>
                            </div>
                            <div className="absolute bottom-2 right-2 md:bottom-1 md:right-1 sm:bottom-1 sm:right-1 xs:bottom-1 xs:right-1 bg-black p-2 rounded-full">
                                <label htmlFor="fileInput" className="cursor-pointer">
                                    <MdDelete className="text-white" onClick={handleDeleteProfilePic} />
                                </label>
                            </div>
                        </div>
                    }
                    <p className="font-poppins py-2">Profile Picture
                        <h6 className="font-poppins text-xs text-[#E23232] text-center"> (max size: 100 KB)</h6>
                    </p>
                </div>


                {/* details bunch */}
                <div className="">
                    {detailsBunch.map((detail) => (
                        <div key={detail.id} className="w-full">
                            {/* put address text before address field */}
                            {detail.id === "building" && 
                                    <p className="font-bold md:text-sm sm:text-sm xs:text-xs mb-2 ">Address:</p>
                            }
                            {/* show the details based on their type */}
                            <div className="flex flex-row mb-6 md:text-sm sm:text-sm xs:text-xs">
                                <label htmlFor={detail.id} className="text-nowrap font-medium">{detail.placeholder}:</label>
                                <div className="w-full ml-2">
                                    {detail.type === "select" &&
                                        <select id={detail.id} value={detail.value} onChange={(e) => detail.method(e.target.value)} className="border-2 rounded-md border-gray-300"  style={{ width: '100%', maxWidth: '100%' }}>
                                            {detail.id === "gender" && 
                                                genderList.map((gender) => (
                                                    <option value={gender}>{gender}</option>
                                                ))
                                            }
                                            {detail.id === "state" && 
                                                statesList.map((state) => (
                                                    <option value={state}>{state}</option>
                                                    ))
                                            }
                                            {detail.id === "district" &&
                                                districtsList[state].map((district) => (
                                                    <option value={district}>{district}</option>
                                                ))
                                            }
                                        </select>
                                    }
                                    {detail.type === "text"  &&
                                        <div>
                                            <input
                                                id={detail.id}
                                                type={detail.type}
                                                required
                                                autoFocus={detail.id === "firstName"}
                                                className="border-2 rounded-md border-gray-300 px-2 w-full"
                                                value={detail.value}
                                                maxLength={detail.maxLength}
                                                onChange={(e) => handleInputChange(detail.id, e.target.value)}
                                            />
                                            {/* error msg */}
                                            <div className="">
                                            {detail.id === "firstName" && <p className="text-red-500 text-sm">{firstNameError}</p> }
                                            {detail.id === "lastName" && <p className="text-red-500 text-sm">{lastNameError}</p> }
                                            {detail.id === "password" && <p className="text-sm"> {passwordError} </p> }
                                            {detail.id === "phoneNumber" && <p className="text-red-500 text-sm">{PhoneNumberError}</p> }
                                            {detail.id === "building" && <p className="text-red-500 text-sm">{buildingError}</p> }
                                            {detail.id === "landmark" && <p className="text-red-500 text-sm">{landmarkError}</p> }
                                            {detail.id === "area" && <p className="text-red-500 text-sm">{areaError}</p> }
                                            </div>
                                        </div>
                                    }
                                    {detail.type === "date" &&
                                        <div className="flex w-full justify-start">
                                            <input
                                                id={detail.id}
                                                type={detail.type}
                                                required
                                                className="border-2 rounded-md border-gray-300 px-2 w-fit"
                                                // Convert and format the stored date
                                                value={formatDateForDisplay(detail.value)}
                                                // Convert the input value to your desired format for storage
                                                onChange={(e) => handleInputChange(detail.id, formatDateForStorage(e.target.value))}
                                            />
                                            <div className="flex items-end">
                                                {detail.id === "birthday" && <p className="text-red-500 text-sm ml-2">{birthdayError}</p> }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>

                {/* button for edit details  */}
                <button 
                    type="submit"
                    className="px-20 py-3 md:px-14 md:py-2 sm:px-14 sm:py-2 xs:px-14 xs:py-2 rounded-lg shadow-lg font-podkova bg-sky-900 text-white text-2xl md:text-xl sm:text-xl xs:text-xl"
                    onClick={() => handleEditProfile()}
                >
                    SAVE
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
