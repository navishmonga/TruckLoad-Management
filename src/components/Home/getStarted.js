import React from "react";
import { ArrowDown } from "lucide-react";

const GetStarted = () => {
  return (
    <div className="m-10 bg-zinc-900 text-white font-['Greycliff CF'] px-24 py-16">
      <div className="flex-col w-2/3">
        <h1 className="text-center text-4xl font-extrabold">
          Select Multiple Lanes Simultaneously
        </h1>
        <ArrowDown  className="mx-auto my-4 font-bold" size={36} strokeWidth={3}/>
        <h1 className="text-center text-4xl font-extrabold">
          Book multiple loads
        </h1>
        <div className="flex-col pb-56">
          <h1 className="pt-10 font-bold text-left w-1/3">
            Get a plan that is right for you
          </h1>
          <h1 className="pt-10 font-bold text-left w-1/3">
            Have multiple trucks? Need multiple dispatchers? Search upto 5 lanes
            simultaneously
          </h1>
        </div>
      </div>
      <div className="pb-20">
        <h1 className="text-4xl font-extrabold p-4">Lets get to work</h1>
        <button className="rounded-full bg-violet-600 p-2 px-8 animate-pulse hover:scale-105 transition-all duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
