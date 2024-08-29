import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
    const isSignedUp=useSelector((state)=>state.auth.isSignedUp);
    const [mail,setMail]=useState('');
    const handleVerification=()=>{
        
    }
  return isSignedUp? (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="rounded-2xl bg-white p-8 flex flex-col items-center space-y-16 w-1/3">
        <input
          onChange={(e) => setMail(e.target.value)}
          className="rounded-lg py-2 px-4 w-1/2 mt-20 border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-black"
          placeholder="Enter your email"
          type="email"
          value={mail}
          required
        />
        <button className="rounded-lg bg-indigo-500 text-white px-6 py-2" onClick={handleVerification}>
          Verify Email
        </button>
      </div>
    </div>
  ): (
    <div className="bg-gray-900 flex-col justify-center items-center text-white p-16">
        <h1 className="text-5xl">Please Signup First</h1>
        <Link to="/signup"><button className="rounded-lg bg-indigo-500 text-white px-6 py-2 mt-16">Signup</button></Link>
    </div>
  );
};

export default VerifyEmail;
