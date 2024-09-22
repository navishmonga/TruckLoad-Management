import React from "react";
import background from "../../Images/home.jpg"
import { Orbit, Rotate3D, CircleChevronUp } from "lucide-react";
import Stepper from "./stepper";
import home2 from "../../Images/home2.jpg"
import Twenty4Seven from "./Twenty4seven";
import Negotiation from "./Negotiation";
import GetStarted from "./getStarted";

const Home=()=>{
    return (
      <>
        {/* section 1 */}
        <div
          className="bg-cover h-screen flex justify-end"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex-col font-bold font-['Greycliff CF'] ml-auto w-2/7 mr-16 mt-20">
            <h1 className="text-6xl p-1 text-left ">Revolutionize</h1>
            <h1 className="text-7xl p-1 text-left">Your Dispatching</h1>
            <h1 className="text-8xl p-1 text-left bg-gradient-to-r from-[#FF69B4]  to-[#34AADC] bg-clip-text text-transparent ">With AI</h1>
            <p className="text-left text-xl mt-12">
              Our platform is designed to revolutionize your dispatching <br />
              and make it more efficient and effective by integrating
              <br />
              <span className="text-2xl">Artificial Intelligence</span>
            </p>
            <button className="flex-1 rounded-md text-white font-bold bg-pink-700 hover:bg-gray-600 shadow-md shadow-black transition-all duration-300 ease-in-out m-10 p-2 px-3">
              Get Started With Us
            </button>
          </div>
        </div>

        {/* section 2 */}
        <div className="bg-gray-800 flex font-semibold font-['Greycliff CF']">
          <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
              <Rotate3D size={36} />
              <Orbit size={48} />
              <CircleChevronUp size={36} />
            </div>
            <h1 className="text-2xl p-1 text-center ">Find loads in minutes</h1>
            <button className="text-black flex-1 rounded-lg bg-cyan-400 m-5 p-2 px-3">
              Learn More
            </button>
          </div>
          <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
              <Rotate3D size={36} />
              <Orbit size={48} />
              <CircleChevronUp size={36} />
            </div>
            <h1 className="text-2xl p-1 text-center ">AI Dispatcher available 24/7</h1>
            <button className="text-black flex-1 rounded-lg bg-cyan-400 m-5 p-2 px-3">
              Learn More
            </button>
          </div>
          <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
              <Rotate3D size={36} />
              <Orbit size={48} />
              <CircleChevronUp size={36} />
            </div>
            <h1 className="text-2xl p-1 text-center  ">Competitive rates by AI Negotiator</h1>
            <button className="text-black flex-1 rounded-lg bg-cyan-400 m-5 p-2 px-3">
              Learn More
            </button>
          </div>
          <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
              <Rotate3D size={36} />
              <Orbit size={48} />
              <CircleChevronUp size={36} />
            </div>
            <h1 className="text-2xl p-1 text-center ">Search Multiple Lanes Simultaneously</h1>
            <button className="text-black flex-1 rounded-lg bg-cyan-400 mt-5 p-2 px-3">
              Learn More
            </button>
          </div>
        </div>

        {/* section 3 */}
        {/* <div className="bg-white flex text-black">
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">
              These are the some of the features of our platform . We
              continously make effort to make this platform more user friendly
              and efficient . We hope you like our services
            </p>
          </div>
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">
              These are the some of the features of our platform . We
              continously make effort to make this platform more user friendly
              and efficient . We hope you like our services
            </p>
          </div>
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">
              These are the some of the features of our platform . We
              continously make effort to make this platform more user friendly
              and efficient . We hope you like our services
            </p>
          </div>
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">
              These are the some of the features of our platform . We
              continously make effort to make this platform more user friendly
              and efficient . We hope you like our services
            </p>
          </div>
        </div> */}
        <div className=" bg-white text-black font-['Greycliff CF'] mx-24 py-10">
          <h1 className="text-4xl font-bold text-left p-8">
            Get taylored results within minutes
          </h1>
          <div className="flex justify-evenly">
            <Stepper />
            {/* <div className="bg-cover bg-right flex-auto m-10" style={{ backgroundImage: `url(${home2})` }}></div> */}
            <div
              className="flex-auto m-10"
              style={{
                backgroundImage: `url(${home2})`,
                backgroundSize: "contain", // Ensures the full image is visible
                backgroundPosition: "center ", // Aligns the image to the right
                backgroundRepeat: "no-repeat", // Prevents repetition
                aspectRatio: "4 / 3", // Maintains the 4:3 aspect ratio
                minHeight: "100px", // Ensures some height is allocated, adjust as needed
                maxHeight: "400px", // Limits the maximum height of the image
              }}
            ></div>
          </div>
        </div>
        <Twenty4Seven />
        <Negotiation />
        <GetStarted />
      </>
    );
}


export default Home;