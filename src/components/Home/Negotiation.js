import React from "react";
import growth from "../../Images/griwth.jpg";

const Negotiation=()=>{
    return (
        <div className="flex text-black font-['Greycliff CF Heavy'] my-22 mx-16">
            <div className="flex-col w-1/3">
                <h1 className="text-4xl font-bold text-left ml-6">With our AI Negotiation tool, get the best rates</h1>
                <p className="w-2/3 text-left p-5 ml-10 mt-5">Continous market research allows us to negotiate competivity for you using statistics</p>
                <p className="w-2/3 text-left p-5 ml-10">Data Analytics give us the edge by finding trends and up to date rates per lane</p>
                <p className="w-2/3 text-left p-5 ml-10">We make sure you get paid properly for your hard work</p>
            </div>
            <div
              className="flex-auto m-10"
              style={{
                backgroundImage: `url(${growth})`,
                backgroundSize: "contain", // Ensures the full image is visible
                backgroundPosition: "center ", // Aligns the image to the right
                backgroundRepeat: "no-repeat", // Prevents repetition
                aspectRatio: "4 / 3", // Maintains the 4:3 aspect ratio
                minHeight: "100px", // Ensures some height is allocated, adjust as needed
                maxHeight: "400px", // Limits the maximum height of the image
              }}
            ></div>
        </div>
    )
}

export default Negotiation;