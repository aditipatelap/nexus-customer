import React, { useContext } from 'react';
import { TbCameraPlus } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import DataContext from './DataContext';

const EditProfile = ({ handleEditClick, detailsBunch }) => {
    const { profilePic } = useContext(DataContext);

    // styling for all input field
    const styling = "border-b-2 border-gray-300 px-2 mt-6 w-full";

    return (
        <div>
        <form>
            {/* profile picture  */}
            <div className="flex flex-col items-center w-full">
                {!profilePic && 
                    <div className="bg-slate-300 p-16 md:p-12 sm:p-10 xs:p-9 rounded-full">
                        <TbCameraPlus className="text-6xl" />
                    </div>
                }
                {profilePic &&
                <div className="relative border-4 border-black rounded-full">
                    <div className="h-40 w-40 md:h-32 md:w-32 sm:h-32 sm:w-32 xs:h-32 xs:w-32 rounded-full overflow-hidden">
                        <img src={profilePic} alt="profile picture"  className="bg-slate-400 w-full h-full object-cover"/>
                    </div>
                    <div className="absolute bottom-2 right-2 md:bottom-1 md:right-1 sm:bottom-1 sm:right-1 xs:bottom-1 xs:right-1 bg-black p-2 rounded-full">
                        <FaEdit className="text-white" />
                    </div>
                </div>
                }
                <p className="font-poppins py-2">Profile Picture</p>
            </div>
            {/* details bunch */}
            {detailsBunch.map((detail) => (
                <input
                    id={detail.id}
                    type="text"
                    required
                    autoFocus={detail.id === "firstName"}
                    className={styling}
                    value={detail.value}
                    onChange={(e) => detail.method(e.target.value) }
                />
            ))}
            <button 
                className="mt-6 px-20 py-3 md:px-14 md:py-2 sm:px-14 sm:py-2 xs:px-14 xs:py-2 rounded-lg shadow-lg font-podkova bg-sky-900 text-white text-2xl md:text-xl sm:text-xl xs:text-xl"
                onClick={handleEditClick}
            >
                SAVE
            </button>
            </form>
        </div>
    );
};

export default EditProfile;
