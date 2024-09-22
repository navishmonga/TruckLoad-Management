import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { setUser } from "../../redux/userSlice";
import { toast } from "react-toastify";

const VerifyEmail = () => {
    const isEmailVerified=useSelector((state)=>state.user?.email_verified === 'Y' ? true : false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const handleVerification=async ()=>{
        try {
          const response = await fetch('http://127.0.0.1:8000/api/email_verify',{
            method : 'POST',
            headers :{
              'content-type':'application/json'
            },
            body :JSON.stringify({
              email
            })
          })
          const data=await response.json();
          if(response.ok){
            toast(data.message);
            const interval = setInterval(()=>{
              const newResponse = fetch('http://127.0.0.1:8000/api/email_verification_confirm',{
                method : 'POST',
                headers :{
                  'content-type':'application/json'
                },
                credentials: 'include'
              });
              if(newResponse.ok){
                clearInterval(interval);
                toast('Email Verified Successfully');
                dispatch(setUser({email_verified:"Y"}));
                navigate('/');
              }
            },2000);
          }
          else toast(data.message || data.error);
        } catch (error) {
          toast(error.message);
        }
    }
  return !isEmailVerified? (
    <div className="bg-gray-900 flex justify-center items-center min-h-screen">
      <div className="rounded-2xl bg-white p-8 flex flex-col items-center space-y-16 w-1/3">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg py-2 px-4 w-1/2 mt-20 border border-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-black"
          placeholder="Enter your email"
          type="email"
          value={email}
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
