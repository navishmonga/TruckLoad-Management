import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { logout } from "../redux/authSlice";
import { toast } from "react-toastify";

const  Navbar=() =>{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    try {
      const response=await fetch(`http://127.0.0.1:8000/api/logout`);
      const data=await response.json();
      if(response.ok){
        toast(data.message);
        dispatch(logout());
        navigate('/');
      }
      else toast(data.message || data.error);
    } catch (error) {
      toast(error)
    }
  }
  return (
    <nav className="bg-gray-800 font-semibold font-['Greycliff CF'] flex p-3">
        <Link to="/"><button className="bg-gray-800 hover:text-amber-500 text-2xl italic rounded-full p-2 px-3 hover:animate-pulse">AI Dispatcher</button></Link>
        <span className="flex-1 text-4xl p-1  font-extrabold tracking-wide">Revolutionize your Dispatching</span>
        <div className="flex">
        {isLoggedIn && <Link to="/results"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Results</button></Link>}
        {isLoggedIn && <Link to="/filters"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Filters</button></Link>}
        {/* <Link to="/analytics"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Analytics</button></Link> */}
        <Link to="/pricing"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Pricing</button></Link>
        {!isLoggedIn && <Link to="/login"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Login</button></Link>}
        {/* {!isLoggedIn && <Link to="/signup"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Signup</button></Link>} */}
        {isLoggedIn && <button onClick={handleLogout} className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">LogOut</button>}
        <Link to="/contact"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3 hover:animate-pulse">Contact Us</button></Link>
        </div>
    </nav>
  );
}
export default Navbar;


