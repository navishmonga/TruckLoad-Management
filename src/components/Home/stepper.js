import React from "react";
import { Truck, Search,ClipboardCheck,MapPin } from "lucide-react";

const Stepper = () => {
  return (
    <ol className="relative text-black border-s text-lg border-gray-200 ml-5 mt-10 dark:border-violet-700 w-1/3 dark:text-black text-left">
      <li className="mb-16 ms-8">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -start-4 ring-4 ring-white dark:ring-purple-200 dark:bg-purple-200">
          <Truck
            size={20}
            className="w-5 h-5 text-violet-700 dark:text-violet-700"
          />
        </span>
        <h3 className="font-medium leading-tight">Create one or more lanes you want to find loads for</h3>
      </li>
      <li className="mb-16 ms-8">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -start-4 ring-4 ring-white dark:ring-purple-200 dark:bg-purple-200">
          <Search
            size={20}
            className="w-5 h-5 text-violet-700 dark:text-violet-700"
          />
        </span>
        <h3 className="font-medium leading-tight">Our AI finds loads which meets your requirements for the lanes</h3>
      </li>
      <li className="mb-16 ms-8">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -start-4 ring-4 ring-white dark:ring-purple-200 dark:bg-purple-200">
          <ClipboardCheck
            size={20}
            className="w-5 h-5 text-violet-700 dark:text-violet-700"
          />
        </span>
        <h3 className="font-medium leading-tight">You Decide which Load you want or if you do not want</h3>
      </li>
      <li className="ms-8">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-200 rounded-full -start-4 ring-4 ring-white dark:ring-purple-200 dark:bg-purple-200">
          <MapPin
            size={20}
            className="w-5 h-5 text-violet-700 dark:text-violet-700"
          />
        </span>
        <h3 className="font-medium leading-tight">Finish booking your load or continue searching what you're looking for</h3>
      </li>
    </ol>
  );
};

export default Stepper;
