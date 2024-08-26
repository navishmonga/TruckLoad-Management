import React from "react";
import { Link } from "react-router-dom";


const  Navbar=() =>{
  return (
    <nav className="bg-gray-800 font-semibold flex p-3">
        <Link to="/"><button className="bg-gray-800 hover:text-amber-500 text-2xl italic rounded-full p-2 px-3">DatApp</button></Link>
        <span className="flex-1 text-4xl p-1">Revolutionize your Dispatching</span>
        <div className="flex">
        <Link to="/analytics"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Analytics</button></Link>
        <Link to="/pricing"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Pricing</button></Link>
        <Link to="/login"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Login</button></Link>
        <Link to="/signup"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Signup</button></Link>
        <Link to="/contact"><button className="bg-gray-800 hover:bg-cyan-400 text-lg rounded-full p-2 px-3">Contact Us</button></Link>
        </div>
    </nav>
  );
}
export default Navbar;

