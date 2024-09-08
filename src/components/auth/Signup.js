import React, { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import { EyeOff } from "lucide-react";
import { useDispatch,useSelector } from "react-redux";
import { signedUp } from "../../redux/authSlice";
import encryptAES from "../../utils/crypto";
const Signup = () => {
  const dispatch = useDispatch();
  const baseURL = "http://127.0.0.1:8000"
  const isSignedUp=useSelector((state)=>state.auth.isSignedUp);
  const navigate=useNavigate();
  const [result,setResult]=useState(null)
  useEffect(()=>{
    if(isSignedUp){
      navigate('/verifymail');
    }
  },[isSignedUp,navigate])
  const handleSignup=async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstname=formData.get('firstname');
    const lastname=formData.get('lastname');
    const username=encryptAES(formData.get('username'));
    const email=encryptAES(formData.get('email'));
    const password=encryptAES(formData.get('password'));
    const phone=encryptAES(formData.get('phone'));
    console.log(firstname,lastname,username,email,password,phone);
    
    try {
      const response=await fetch(`${baseURL}/api/reg`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username: username, 
          email: email,
          lastname: lastname,
          firstname: firstname,
          password: password,
          phone: phone,
          subscription: 'None',
          running: 'N',
          email_verified: 'N',
      }),
      })
      const data=await response.json();
      if(response.status===201){
        setResult(data.message);
        dispatch(signedUp());
      }
      else{
        setResult(data.error)
      }

    } catch (error) {
      console.log(error);
    }
  }


  const [passHidden, setPassHidden] = useState(true);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div></div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Signup</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSignup} className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  name="lastname"
                  type="tel"
                  placeholder="Last Name"
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  name="username"
                  type="text"
                  placeholder="Username"
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <div className="relative">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 pl-10"
                    name="password"
                    type={`${passHidden ? "password" : "text"}`}
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setPassHidden(!passHidden)}
                    className="absolute right-3 top-2/3 -translate-y-1/2 cursor-pointer"
                  >
                    <EyeOff size={20} />
                  </button>
                </div>
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Signup</span>
                </button>
                {result && (<div className="text-red-500 font-bold">{result}</div>)}
                <div className="mt-3">
                  <Link to="/login" className="text-indigo-500 hover:underline">
                    Already have an account?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
