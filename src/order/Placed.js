import React from 'react';
import { Link } from 'react-router-dom';

const Placed = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-cente">
        <div className="flex flex-col">
            <p> Your orders has been created. Now Please wait for the updates. </p>
            <Link to="/home"> Go to Home </Link>
        </div>
    </div>
  )
}

export default Placed
