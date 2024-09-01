import React, { useState,useRef } from "react";
import DisplayData from "./displayData";
import { CirclePlus, X } from "lucide-react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const Filters = () => {
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [dates,setDates]=useState({
    startDate:new Date(),
    endDate:new Date()
  })
  const handleDateChange=(date,caller)=>{
    if(caller==="S"){
      setDates({
        ...dates,
        startDate:date
      })
    }
    else{
      setDates(
        {
          ...dates,
          endDate:date
        }
      )
    }
  }
  const fetchSuggestions = async (searchText, caller) => {
    try {
      const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&filter=countrycode:us&apiKey=893f9d2fbac2447696efa3f7df2f6efa`);
      if (response.ok) {
        const data = await response.json();
        if (caller === "origin") {
          setOriginSuggestions(data.features.map(feature => feature.properties.formatted));
        } else {
          setDestinationSuggestions(data.features.map(feature => feature.properties.formatted));
        }
      } else {
        throw new Error('Failed to load suggestions');
      }
    } catch (error) {
      console.error(error);
    }
  };
    const handleExcludeLoads=()=>{
        const value=inputRef.current.value;
        if (value && excludeLoads.length < 10) {
          const newLoads = [...excludeLoads, value];
          setExcludeLoads(newLoads);
          inputRef.current.value = null;
        }
    }
    const [excludeLoads,setExcludeLoads]=useState([]);
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
            list="originSuggestions"
            onChange={(e) => fetchSuggestions(e.target.value, "origin")}
          ></input>
          <datalist id="originSuggestions">
            {originSuggestions.map((suggestion) => (
              <option>{suggestion}</option>
            ))}
          </datalist>
          <input
            placeholder="Destination"
            className="p-3 flex-1 mx-4 rounded-3xl my-5 border border-black"
            list="destinationSuggestions"
            onChange={(e) => fetchSuggestions(e.target.value, "destination")}
          ></input>
          <datalist id="destinationSuggestions">
            {destinationSuggestions.map((suggestion) => (
              <option>{suggestion}</option>
            ))}
          </datalist>
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
          <CirclePlus
            onClick={handleExcludeLoads}
            className=" mr-20 cursor-pointer"
            size={32}
            color="green"
          />
          <h1 className="text-xl">Excluded Loads :- </h1>
          {excludeLoads.map((num) => (
            <h1 key={num} className="text-xl m-1">
              {num},
            </h1>
          ))}
          <X
            className="cursor-pointer"
            color="red"
            onClick={() => setExcludeLoads([])}
          />
        </div>
        <div className="flex my-5 items-center justify-center">
          <DatePicker
            placeholderText="Select Start Date"
            selected={dates.startDate}
            className="p-3 mx-4 ml-10 rounded-3xl border border-black"
            dateFormat="MM-dd-yyyy"
            onChange={(date) => handleDateChange(date, "S")}
          />
          <DatePicker
            placeholderText="Select End Date"
            selected={dates.endDate}
            className="p-3 mx-4 ml-10 rounded-3xl border border-black"
            dateFormat="MM-dd-yyyy"
            onChange={(date) => handleDateChange(date, "E")}
          />
        </div>
        <div className="flex my-5 justify-center items-center">
          <h1 className="text-xl">OTP Type:- </h1>
          <div className="flex items-center ml-5">
            <input
              type="radio"
              id="email"
              name="OTP"
              value="email"
              className="mr-2"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="flex items-center ml-5">
            <input
              type="radio"
              id="phone"
              name="OTP"
              value="phone"
              className="mr-2"
            />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <div className="flex mx-auto justify-center">
          <button className="m-3 bg-red-800 text-white px-3 py-2 rounded-3xl text-xl">
            Start Script
          </button>
        </div>
      </div>
      <div className="w-full">
        <DisplayData />
      </div>
    </div>
  );
};

export default Filters;
