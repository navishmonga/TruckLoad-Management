import React from "react";
import background from "../Images/home.jpg"
import { Orbit, Rotate3D, CircleChevronUp } from "lucide-react";
const Home=()=>{
    return (
      <>
        {/* section 1 */}
        <div
          className="bg-cover h-screen flex justify-end"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex-col font-semibold font-['TimeBurner'] ml-auto w-2/7 mr-16 mt-20">
            <h1 className="text-6xl p-1 text-left " >Revolutionize</h1>
            <h1 className="text-7xl p-1 text-left">Your Dispatching</h1>
            <h1 className="text-8xl p-1 text-left">With AI</h1>
            <p className="text-left text-xl mt-12">Our platform is designed to revolutionize your dispatching <br />and make it more efficient and effective by integrating<br/><span className="text-2xl">Artificial Intelligence</span></p>
            <button className="flex-1 rounded-full text-black text- font-bold bg-cyan-400 m-10 p-2 px-3 hover:scale-110">Get Started With Us</button>
          </div>
        </div>

        {/* section 2 */}
        <div className="bg-gray-800 flex">
            <div className="flex-col p-6 w-1/4 my-8 border-r">
                <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">Smart Load Matching</h1>
                <p>Smart Loading is one of the features provided by us</p>
                <button className="text-black flex-1 rounded-lg bg-cyan-400 m-5 p-2 px-3">Learn More</button>
            </div>
            <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">Smart Load Matching</h1>
                <p>Smart Loading is one of the features provided by us</p>
                <button className="text-black flex-1 rounded-lg bg-cyan-400 m-5 p-2 px-3">Learn More</button>
            </div>
            <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center  ">Preditive Analytics</h1>
                <p>Smart Loading is one of the features provided by us</p>
                <button className="text-black flex-1 rounded-lg bg-cyan-400 m-5 p-2 px-3">Learn More</button>
            </div>
            <div className="flex-col p-6 w-1/4 my-8 border-r">
            <div className="flex justify-evenly items-center pb-4">
                    <Rotate3D size={36} />
                    <Orbit size={48} />
                    <CircleChevronUp size={36} />
                </div>
                <h1 className="text-2xl p-1 text-center ">AutoGeoLocation</h1>
                <p>Smart Loading is one of the features provided by us</p>
                <button className="text-black flex-1 rounded-lg bg-cyan-400 mt-5 p-2 px-3">Learn More</button>
            </div>
        </div>

        {/* section 3 */}
        <div className="bg-white flex text-black">
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">These are the some of the features of our platform . We continously make effort to make this platform more user friendly and efficient . We hope you like our services</p>
          </div>
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">These are the some of the features of our platform . We continously make effort to make this platform more user friendly and efficient . We hope you like our services</p>
          </div>
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">These are the some of the features of our platform . We continously make effort to make this platform more user friendly and efficient . We hope you like our services</p>
          </div>
          <div className="w-1/4 m-auto p-4">
            <h1 className="text-4xl">Features</h1>
            <p className="p-5">These are the some of the features of our platform . We continously make effort to make this platform more user friendly and efficient . We hope you like our services</p>
          </div>
        </div>
      </>
    );
}


export default Home;