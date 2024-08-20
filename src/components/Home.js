import React from "react";
import background from "../Images/home.jpg"
import { Orbit, Rotate3D, CircleChevronUp } from "lucide-react";
const Home=()=>{
    return (
      <>
        <div
          className="bg-cover h-screen flex justify-end"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex-col ml-auto w-2/7 mr-16 mt-20">
            <h1 className="text-6xl p-1 text-left">Revolutionize</h1>
            <h1 className="text-7xl p-1 text-left">Your Dispatching</h1>
            <h1 className="text-8xl p-1 text-left">With AI</h1>
          </div>
        </div>
        <div className="bg-gray-800 flex">
            <div className="flex-col p-6 w-1/4">
                <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">Smart Load Matching</h1>
                <p>Smart Loading is one of the features provided by us</p>
            </div>
            <div className="flex-col p-6 w-1/4">
            <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">Smart Load Matching</h1>
                <p>Smart Loading is one of the features provided by us</p>
            </div>
            <div className="flex-col p-6 w-1/4">
            <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">Preditive Analytics</h1>
                <p>Smart Loading is one of the features provided by us</p>
            </div>
            <div className="flex-col p-6 w-1/4">
            <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">AutoGeoLocation</h1>
                <p>Smart Loading is one of the features provided by us</p>
            </div>
        </div>
      </>
    );
}


export default Home;