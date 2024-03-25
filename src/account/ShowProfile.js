import React, { useContext } from 'react';
import { TbCameraPlus } from "react-icons/tb";
import DataContext from '../context/DataContext';

const ShowProfile = ({ handleEditClick }) => {
    const {
        profilePic, firstName,  lastName, email, password, phoneNumber, gender, 
        birthday, building, landmark, area, district, state,
    } = useContext(DataContext);

    
    const detailsBunch = [
        { id: "firstName", value: firstName, placeholder: "First Name"},
        { id: "lastName", value: lastName, placeholder: "Last Name"},
        { id: "email", value: email, placeholder: "Email"},
        { id: "password", value: password, placeholder: "Password"},
        { id: "phoneNumber", value: phoneNumber, placeholder: "Phone Number"},
        { id: "gender", value: gender, placeholder: "Gender"},
        { id: "birthday", value: birthday, placeholder: "Birthday"},
    
        // address 
        { id: "building", value: building, placeholder: "Building no. & name"},
        { id: "landmark", value: landmark, placeholder: "Landmark"},
        { id: "area", value: area, placeholder: "Area/Street"},
        { id: "state", value: state,placeholder: "State"},
        { id: "district", value: district, placeholder: "District"},
    ];
    
    return (
        <div>
            {/* add profile image */}
            <div className="flex flex-col items-center w-full mb-6">
                {!profilePic && 
                    <div className="bg-slate-300 p-16 md:p-12 sm:p-10 xs:p-9 border-4 border-black rounded-full">
                        <TbCameraPlus className="text-6xl" />
                    </div>
                }
                {profilePic &&
                    <div className="border-4 border-black rounded-full">
                        <div className="h-48 w-48 md:h-40 md:w-40 sm:h-40 sm:w-40 xs:h-40 xs:w-40 rounded-full overflow-hidden">
                            <img src={profilePic}  alt="" className="bg-slate-400 w-full h-full object-cover"/>
                        </div>
                    </div>
                }
            </div>

            {/* show details  */}
            <div className="w-full">
                {detailsBunch.map((detail) => (
                    <div key={detail.id}>
                        {/* put address text before address field */}
                        {detail.id === "building" && 
                            <p className="font-bold md:text-sm sm:text-sm xs:text-xs mb-2 ">Address:</p>
                        }
                        <div className="flex flex-col justify-center mb-6 md:text-sm sm:text-sm xs:text-xs">
                            <label htmlFor={detail.id}>{detail.placeholder}:</label>
                            {/* don't show password field */}
                            {detail.id === "password" &&
                                <p className="border-b-2 border-gray-300 mt-1 px-2">********</p>
                            }
                            {detail.id !== "password" &&
                                <p className="border-b-2 border-gray-300 mt-1 px-2">{detail.value}</p>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* button for edit details  */}
            <button 
            className="px-20 py-3 md:px-14 md:py-2 sm:px-14 sm:py-2 xs:px-14 xs:py-2 rounded-lg shadow-lg font-podkova bg-sky-900 text-white text-2xl md:text-xl sm:text-xl xs:text-xl"
            onClick={handleEditClick}
            >
                EDIT
            </button>
        </div>
    );
};

export default ShowProfile;
