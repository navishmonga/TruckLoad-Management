import { Trash2,CircleCheck } from "lucide-react";
import React, { useEffect, useState } from "react";

const Results = () => {
  const [results, setResults] = useState([]);
  const handleDelete = (index) => {
    console.log(index);
  };
  const handleApprove=(index)=>console.log(index);
  useEffect(() => {
    setResults([
      {
        tripInfo: {
          loadType: "Full",
          origin: { location: "Shafter, CA", miles: 198, date: "Mar 19" },
          destination: { location: "Portland, OR", miles: 173 },
        },
        equipmentInfo: {
          truckType: "Van or Reefer",
          length: "53 ft",
        },
        comments: "None",
        tripMiles: 849,
        totalPrice: "-",
        ratePerMile: "-",
        companyInfo: {
          name: "Total Quality Logistics Inc",
          contact: "ARuby@tql.com",
          mcNumber: "322572",
          location: "Milford, OH",
        },
        creditScore: 97,
        daysToPay: 18,
      },
      {
        tripInfo: {
          loadType: "Full",
          origin: { location: "Delano, CA", miles: 171, date: "Mar 19" },
          destination: { location: "Auburn, WA", miles: 26 },
        },
        equipmentInfo: {
          truckType: "Reefer",
          length: "53 ft",
        },
        comments: "2781627",
        tripMiles: 981,
        totalPrice: "-",
        ratePerMile: "-",
        companyInfo: {
          name: "Armstrong Transport Group Inc",
          contact: "(844) 649-7217",
          mcNumber: "555609",
          location: "Charlotte, NC",
        },
        creditScore: 97,
        daysToPay: 16,
      },
      {
        tripInfo: {
          loadType: "Partial",
          origin: { location: "Monterey, CA", miles: 156, date: "Mar 19" },
          destination: { location: "Auburn, WA", miles: 26 },
        },
        equipmentInfo: {
          truckType: "Van",
          length: "5 ft",
        },
        comments: "None",
        tripMiles: 885,
        totalPrice: "-",
        ratePerMile: "-",
        companyInfo: {
          name: "Cheema Freightlines LLC/Cheema Logistics LLC",
          contact: "DATLTL@cheemalogistics.com",
          mcNumber: "681109",
          location: "Sumner, WA",
        },
        creditScore: 97,
        daysToPay: 17,
      },
    ]);
  }, []);
  return (
    <div className="bg-zinc-800 h-screen">
      <div className="text-3xl font-bold text-left text-white p-2 pt-16">
        Results:
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Trip Info
              </th>
              <th scope="col" className="px-6 py-3">
                Equipment Info
              </th>
              <th scope="col" className="px-6 py-3">
                Comments
              </th>
              <th scope="col" className="px-6 py-3">
                {"TRIP(mi)"}
              </th>
              <th scope="col" className="px-6 py-3">
                {"TOTAL($)"}
              </th>
              <th scope="col" className="px-6 py-3">
                {"RATE/MILE($)"}
              </th>
              <th scope="col" className="px-6 py-3">
                Company Info
              </th>
              <th scope="col" className="px-6 py-3">
                Credit Score
              </th>
              <th scope="col" className="px-6 py-3">
                Days to Pay
              </th>
              <th scope="col" className="px-6 py-3">
                Approve
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex-col">
                    <p>
                      {result.tripInfo.origin.location}
                      {` (${result.tripInfo.origin.miles} mi)`}
                    </p>
                    <p>
                      {result.tripInfo.destination.location}
                      {` (${result.tripInfo.destination.miles} mi)`}
                    </p>
                    <p>{result.tripInfo.origin.date}</p>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex-col">
                    <p>Load: {result.tripInfo.loadType}</p>
                    <p>Truck: {result.equipmentInfo.truckType}</p>
                    <p>Length: {result.equipmentInfo.length}</p>
                    <p>Weight: {result.equipmentInfo.weight}</p>
                    <p>Commodity: {result.equipmentInfo.commodity}</p>
                    <p>Reference Id: {result.equipmentInfo.referenceId}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{result.comments}</td>
                <td className="px-6 py-4">{result.tripMiles}</td>
                <td className="px-6 py-4">{result.totalPrice}</td>
                <td className="px-6 py-4">{result.ratePerMile}</td>
                <td className="px-6 py-4">
                  <div className="flex-col">
                    <p>{result.companyInfo.name}</p>
                    <p>{result.companyInfo.contact}</p>
                    <p>MC#{result.companyInfo.mcNumber}</p>
                    <p>{result.companyInfo.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4">{result.creditScore}</td>
                <td className="px-6 py-4">{result.daysToPay}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleApprove(index)}>
                    <CircleCheck size={30} color="green" />
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
