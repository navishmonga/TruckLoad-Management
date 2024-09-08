import React,{useState} from "react";

const ForgotPassword = () => {
    const [result,setResult]=useState(null);

    const resetPassword = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const email = formData.get("email");
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/reset_password_request",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // credentials: "include",
            body: JSON.stringify({ email }),
          }
        );
        const data = await response.json();
        if (response.ok) {
          setResult(data.message);
        } else setResult(data.error);
      } catch (error) {
        console.log(error);
      }
    };
    return (
    <div className="min-h-screen bg-gray-900 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Reset Password</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={resetPassword} className="mx-auto max-w-xs">
                <input
                  name="email"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                />
                {/* Login Button */}
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                <span className="ml-3">Reset Password</span>
                </button>
                {result && (
                  <div className="text-red-500 font-bold">{result}</div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
