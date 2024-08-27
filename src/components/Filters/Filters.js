import React, { useState,useRef } from "react";
import FetchSuggestions from "./FetchSuggestions";
import SelectDate from "./SelectDate";
import DisplayData from "./displayData";
import { CirclePlus, Cross, X } from "lucide-react";

const Filters = () => {
    const handleExcludeLoads=()=>{
        const value=inputRef.current.value;
        const newLoads=[...excludeLoads,value];
        setExcludeLoads(newLoads);
        inputRef.current.value=null;
    }
    const [excludeLoads,setExcludeLoads]=useState([25,30]);
    const inputRef = useRef(null);
  return (
    <div className="bg-gray-900 flex-col justify-center items-center p-6">
      <div className="bg-white text-black flex-col justify-center items-center w-full p-8 rounded-3xl">
        <h1 className="font-semibold text-5xl flex-1 text-left mb-5">
          Create Filters
        </h1>
        <div className="flex mt-12 mb-5">
          <input
            placeholder="Origin"
            className="p-3 flex-1 mx-4 my-5 rounded-3xl border border-black"
          ></input>
          <input
            placeholder="Destination"
            className="p-3 flex-1 mx-4 rounded-3xl my-5 border border-black"
          ></input>
        </div>
        <div className="flex my-5">
          <input
            placeholder="Minimum Rate Per Mile"
            className="p-3 w-2/5 mx-4 rounded-3xl border border-black"
          ></input>
          <input
            placeholder="Minimum Credit Score"
            className="p-3 w-1/5 mx-4 ml-20 rounded-3xl border border-black"
          ></input>
          <input
            placeholder="Minimum Stars"
            className="p-3 w-1/5 mx-4 rounded-3xl border border-black"
          ></input>
        </div>
        <div className="flex my-5 items-center">
          <input
            placeholder="Exclude Loads - MCM Number"
            className="p-3 w-2/5 mx-4 rounded-3xl border border-black"
            ref={inputRef}
          ></input>
          <CirclePlus onClick={handleExcludeLoads} className=" mr-20" size={32} color="green"/>
          <h1 className="text-xl">Excluded Loads :- </h1>
          {excludeLoads.map((num)=><h1 key={num} className="text-xl m-1">{num},</h1>)}
          <X  color="red" onClick={()=>setExcludeLoads([])}/>
        </div>
      </div>
      <div className="w-full">
        <DisplayData />
      </div>
    </div>
  );
};

export default Filters;
