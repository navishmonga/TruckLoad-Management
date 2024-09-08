import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const TableComponent = ({filterToggler,setFilterToggler}) => {
  // Sample data for the table
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn)
  // Function to handle deleting a row
  const [rows,setRows]=useState([]);
  const handleDelete = async(index) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/delete_filter_index?index=${index}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
      if(response.ok){
        setFilterToggler(!filterToggler);
        const data= await response.json();
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFilters = async () => {
    const csrfToken = Cookies.get("csrftoken");
    console.log("CSRF token:", csrfToken);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/getfilters",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Failed to fetch filters:", response.statusText);
        return;
      }
      else{
        console.log("filters fetched successfully");
      }

      const data = await response.json();
      console.log(data);
      setRows(data.Filters ? data.Filters : []);
    } catch (error) {
      console.error("Error fetching filters:", error);
    }
  };


  
  useEffect(()=>{
    if(isLoggedIn)getFilters();
  },[isLoggedIn,filterToggler]);

  return (
    <div className="overflow-x-auto text-black mt-2">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Origin</th>
            <th className="py-2 px-4 border-b">Destination</th>
            <th className="py-2 px-4 border-b">Dh_B</th>
            <th className="py-2 px-4 border-b">Dh_O</th>
            <th className="py-2 px-4 border-b">Start Date</th>
            <th className="py-2 px-4 border-b">End Date</th>
            <th className="py-2 px-4 border-b">Min Credit</th>
            <th className="py-2 px-4 border-b">Minimum Rate Per Mile</th>
            <th className="py-2 px-4 border-b">Starts</th>
            <th className="py-2 px-4 border-b">Equipments</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{row.origin}</td>
              <td className="py-2 px-4 border-b">{row.destination}</td>
              <td className="py-2 px-4 border-b">{row.Dh_B}</td>
              <td className="py-2 px-4 border-b">{row.Dh_O}</td>
              <td className="py-2 px-4 border-b">{row.start_date}</td>
              <td className="py-2 px-4 border-b">{row.end_date}</td>
              <td className="py-2 px-4 border-b">{row.min_credit}</td>
              <td className="py-2 px-4 border-b">{row.minimumRatePerMile}</td>
              <td className="py-2 px-4 border-b">{row.starts}</td>
              <td className="py-2 px-4 border-b">{row.equipments.join(", ")}</td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
