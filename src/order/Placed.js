import React from 'react';
import { Link } from 'react-router-dom';

const Placed = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
        <div className="flex flex-col">
            <p className="text-xl font-poppins font-semibold"> Your orders has been created. Now Please wait for the updates. </p>
            <Link to="/home" className="text-center mt-2 text-blue-500 hover:underline">&larr; Go to Home </Link>
        </div>
    </div>
  )
}

export default Placed
