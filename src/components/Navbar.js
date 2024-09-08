import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { logout } from "../redux/authSlice";

const  Navbar=() =>{
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    try {
      const response=await fetch(`http://127.0.0.1:8000/api/logout`);
      if(!response.ok){
        const data=await response.json();
        alert(data.message);
      }
      dispatch(logout());
      navigate('/');
      document.cookie = "csrftoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav className="bg-gray-800 font-semibold flex p-3">
        <Link to="/"><button className="bg-gray-800 hover:text-amber-500 text-2xl italic rounded-full p-2 px-3">DatApp</button></Link>
        <span className="flex-1 text-4xl p-1">Revolutionize your Dispatching</span>
        <div className="flex">
        {isLoggedIn && <Link to="/filters"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Filters</button></Link>}
        <Link to="/analytics"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Analytics</button></Link>
        <Link to="/pricing"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Pricing</button></Link>
        {!isLoggedIn && <Link to="/login"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Login</button></Link>}
        {!isLoggedIn && <Link to="/signup"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Signup</button></Link>}
        {isLoggedIn && <button onClick={handleLogout} className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">LogOut</button>}
        <Link to="/contact"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Contact Us</button></Link>
        </div>
    </nav>
  );
}
export default Navbar;

