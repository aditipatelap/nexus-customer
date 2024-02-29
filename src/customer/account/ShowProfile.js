import React, { useContext } from 'react';
import { TbCameraPlus } from "react-icons/tb";
import DataContext from './DataContext';

const ShowProfile = ({ handleEditClick, detailsBunch }) => {
    const { profilePic } = useContext(DataContext);

    return (
        <div>
            {/* add profile image */}
            <div className="flex flex-col items-center w-full mb-6">
                {!profilePic && 
                    <div className="bg-slate-300 p-16 md:p-12 sm:p-10 xs:p-9 rounded-full">
                        <TbCameraPlus className="text-6xl" />
                    </div>
                }
                {profilePic &&
                    <div className="border-4 border-black rounded-full">
                        <div className="h-44 w-44 md:h-32 md:w-32 sm:h-32 sm:w-32 xs:h-32 xs:w-32 rounded-full overflow-hidden border-black">
                            <img src={profilePic} alt="profile picture"  className="bg-slate-400 w-full h-full object-cover"/>
                        </div>
                    </div>
                }
            </div>

            {/* show details  */}
            <div className="w-full">
                {detailsBunch.map((detail) => (
                    <div>
                        {/* put address text before address field */}
                        {detail.id === "building" && 
                            <p className="font-bold md:text-sm sm:text-sm xs:text-xs mb-2 ">Address:</p>
                        }
                        {/* don't show password field */}
                        <div className="flex flex-col justify-center mb-6 md:text-sm sm:text-sm xs:text-xs">
                            <label htmlFor={detail.id}>{detail.label}:</label>
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
