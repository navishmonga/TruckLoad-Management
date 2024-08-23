import React from "react";
import { Link } from "react-router-dom";


const  Navbar=() =>{
  return (
    <nav className="bg-gray-800 font-semibold flex p-3">
        <button className="bg-gray-800 hover:text-amber-500 text-2xl italic rounded-full p-2 px-3"><Link to="/">DatApp</Link></button>
        <span className="flex-1 text-4xl p-1">Revolutionize your Dispatching</span>
        <div className="flex">
        <button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3"><Link to="/analytics">Analytics</Link></button>
        <button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3"><Link to="/pricing">Pricing</Link></button>
        <button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3"><Link to="/login">Login</Link></button>
        <button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3"><Link to="/signup">Signup</Link></button>
        <button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3"><Link to="/contact">Contact Us</Link></button>
        </div>
    </nav>
  );
}
export default Navbar;

