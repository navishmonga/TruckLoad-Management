import React, { useState,useRef } from "react";
import TableComponent from "./displayFilters";
import { CirclePlus, X } from "lucide-react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import ScriptModal from "./scriptModal";
// {'origin': _origin.text,
//   'destination': _destination.text,
//   'dh-o': _dh_o.text,
//   'dh-b': _dh_b.text,
//   'start_date': _start_date.text,
//   'end_date': _end_date.text,
//   'min_credit':_min_credit.text,
//   'minimum rate per mile':_minimumratepermile.text,
//   'equipments':   _equipment,
//   'starts':_stars.text

// }
const Filters = () => {
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [err,setError]=useState("");
  const [filterToggler,setFilterToggler]=useState(false);
  const items=[
    "Auto Carrier",
    "B-Train",
    "Conestoga",
    "Container",
    "Container Insulated",
    "Container Refrigerated",
    "Conveyor",
    "Double Drop",
    "Drop Deck Landoll",
    "Dump Trailer",
    "Flatbed",
    "Flatbed Air-Ride",
    "Flatbed Conestoga",
    "Flatbed Double",
    "Flatbed Hazmat",
    "Flatbed Hotshot",
    "Flatbed Maxi",
    "Flatbed or Step Deck",
    "Flatbed w/ Sides",
    "Flatbed w/ Tarps",
    "Flatbed w/ Team",
    "Flatbed Over Dimension",
    "Flatbed w/ Chains",
    "Hopper Bottom",
    "Insulated Van",
    "Lowboy",
    "Lowboy Over Dimension",
    "Moving Van",
    "Pneumatic",
    "Power Only",
    "Reefer",
    "Reefer Air-Ride",
    "Reefer Double",
    "Reefer Hazmat",
    "Reefer Intermodal",
    "Reefer Logistics",
    "Reefer w/ Team",
    "Reefer w/ Pallet Exchange",
    "Removable Gooseneck",
    "Step Deck",
    "Stepdeck Conestoga",
    "Sprinter/Cargo Van",
    "Straight Box Truck",
    "Stretch Trailer",
    "Tanker Aluminum",
    "Tanker Intermodal",
    "Tanker Steel",
    "Truck and Trailer",
    "Van",
    "Van Air Ride",
    "Van Conestoga",
    "Van Double",
    "Van Hazmat",
    "Van Hotshot",
    "Van Insulated",
    "Van Intermodal",
    "Van Lift Gate",
    "Van Open Top",
    "Van Roller Bed",
    "Van Triple",
    "Van Vented",
    "Van w/ Curtains",
    "Van w/ Team",
    "Van w/ Blanket Wrap",
    "Van w/ Pallet Exchange"
  ];
  const [filter, setFilter] = useState({
    origin: "",
    destination: "",
    Dh_B: "",
    Dh_O: "",
    start_date: new Date(),
    end_date: new Date(), // Set default value "-" if radius is null
    min_credit: "",
    minimumRatePerMile: "",
    starts: "",
    equipments: [],
  });
  const handleDateChange=(date,caller)=>{
    if(caller==="S"){
      setFilter({
        ...filter,
        start_date:date
      })
    }
    else{
      setFilter({
        ...filter,
        end_date:date
      })
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
  const handleAddFilter= async()=>{
    try{
      const response = await fetch('http://127.0.0.1:8000/api/addfilter',{
        method: 'POST',
        headers:{
          'content-type' : 'application/json',
        },
        credentials: 'include',
        body:JSON.stringify(filter)
      })
      if (response.ok) {
        setFilter({
          origin: "",
          destination: "",
          dh_b: "",
          dh_o: "",
          start_date: new Date(),
          end_date: new Date(), // Set default value "-" if radius is null
          min_credit: "",
          minimumRatePerMile: "",
          starts: "",
          equipments: [],
        });
        setFilterToggler(!filterToggler);
      }
      else{
        const data = await response.json();
        setError(data.message);
      }
    }
    catch(error){
      console.log(error);
    }
  }
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
            value={filter.origin}
            onChange={(e) => {
              fetchSuggestions(e.target.value, "origin")
              setFilter({
                ...filter,
                origin: e.target.value
              })
              console.log(filter.origin)
            }}
          ></input>
          <datalist id="originSuggestions">
            {originSuggestions.map((suggestion) => (
              <option key={suggestion}>{suggestion}</option>
            ))}
          </datalist>
          <input
            placeholder="Destination"
            className="p-3 flex-1 mx-4 rounded-3xl my-5 border border-black"
            list="destinationSuggestions"
            value={filter.destination}
            onChange={(e) => {
              fetchSuggestions(e.target.value, "destination")
              setFilter({
                ...filter,
                destination: e.target.value
              })}}
          ></input>
          <datalist id="destinationSuggestions">
            {destinationSuggestions.map((suggestion) => (
              <option key={suggestion}>{suggestion}</option>
            ))}
          </datalist>
        </div>
        <div className="flex my-5">
          <input
            placeholder="Minimum Rate Per Mile"
            className="p-3 w-2/5 mx-4 rounded-3xl border border-black"
            value={filter.minimumRatePerMile}
            onChange={(e) => {
              setFilter({
                ...filter,
                minimumRatePerMile: e.target.value
              })
            }}
          ></input>
          <input
            placeholder="Minimum Credit Score"
            className="p-3 w-1/5 mx-4 ml-20 rounded-3xl border border-black"
            value={filter.min_credit}
            onChange={(e) => {
              setFilter({
                ...filter,
                min_credit: e.target.value
              })
            }}
          ></input>
          <input
            placeholder="Minimum Stars"
            className="p-3 w-1/5 mx-4 rounded-3xl border border-black"
            value={filter.starts}
            onChange={(e) => {
              setFilter({
                ...filter,
                starts: e.target.value
              })
            }}
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
            selected={filter.start_date}
            className="p-3 mx-4 ml-10 rounded-3xl border border-black"
            dateFormat="MM-dd-yyyy"
            onChange={(date) => handleDateChange(date, "S")}
          />
          <DatePicker
            placeholderText="Select End Date"
            selected={filter.end_date}
            className="p-3 mx-4 ml-10 rounded-3xl border border-black"
            dateFormat="MM-dd-yyyy"
            onChange={(date) => handleDateChange(date, "E")}
          />
          <input 
          className="p-3 mx-4 ml-10 rounded-3xl border border-black"
          placeholder="Dh-O"
          onChange={(e) => setFilter({...filter, dh_o: e.target.value})}
          ></input>
          <input 
          className="p-3 mx-4 ml-10 rounded-3xl border border-black"
          placeholder="Dh-B"
          onChange={(e) => setFilter({...filter, dh_b: e.target.value})}
          ></input>
        </div>
        {/* <div className="flex my-5 justify-center items-center">
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
        </div> */}
        <div className="flex my-5 justify-center items-center">
          <label className="mr-5 text-xl">Select Equipment:- </label>
          <select 
          onChange={(e) => {
            let newFilter={...filter};
            newFilter.equipments = [...newFilter.equipments, e.target.value];
            setFilter(newFilter);
          }}
          className="border"
          >
            {items.map((equipment,index) => (
              <option key={index}>{equipment}</option>
            ))}
          </select>
          <label className="mx-5 text-xl">Equipments:-</label>
          {filter?.equipments?.map((equipment,index) => (
            <h1 key={index} className="text-xl m-1">{equipment}</h1>
          ))}
        </div>
        <button onClick={handleAddFilter} className="text-white rounded-full m-5 text-xl px-4 py-2 bg-blue-600 ">Add Filter</button>
        <h1 className="text-xl text-red-600">{err}</h1>
        <div className="flex justify-center items-center">
        <ScriptModal />
        </div>
      </div>
      <div className="mx-auto w-1/5 mt-20 text-3xl rounded-2xl bg-indigo-700">Added Filters</div>
      <div className="w-full">
        <TableComponent filterToggler={filterToggler} setFilterToggler={setFilterToggler} />
      </div>
    </div>
  );
};

export default Filters;
