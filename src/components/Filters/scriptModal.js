import React, { useState } from "react";
import {startScript, stopScript} from "./scriptControllers"
const ScriptModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [buttonText,setButtonText]=useState("Start Script")


  const handleStartScript = () => {
    // TODO: implement start script logic
    // startScript({username: login, password: password, otpType: otpType});
    console.log("Script Start Request");
    setButtonText("Stop Script");
  };
  const handleStopScript = () => {
    // TODO: implement stop script logic  
    stopScript();
    setButtonText("Start Script");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <button
          onClick={() => setShowModal(true)}
          className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
        >
          Start Script
        </button>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                onClick={handleCancel}
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Start Script
                </h3>
                <form className="space-y-6">
                  <div className="space-y-1">
                    <label
                      htmlFor="login"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Are you sure you want to start script?
                    </label>
                    
                  </div>
                  
                  
                  {/* <div className="space-y-1">
                    <label
                      htmlFor="otp"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      id="otp"
                      value={otp}
                      onChange={handleOtpChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div> */}
                  <div className="flex justify-center">
                    <button
                      onClick={buttonText==="Start Script"? handleStartScript: handleStopScript}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {buttonText}
                    </button>
                    <button
                      onClick={handleCancel}
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScriptModal;
