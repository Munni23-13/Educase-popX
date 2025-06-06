import React from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Account created successfully!");
    navigate("/account-settings");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-50 px-4 py-6">
      <div className="w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          Create your <br />
          PopX account
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col relative">
            <label
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 "
              for="fullname"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              id="fullname"
              name="fullname"
              className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter full name"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 "
              for="email"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              required
              maxLength={10}
              className="px-4 py-3 outline-none border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 "
              for="email"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              id="email"
              name="email"
              className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter email address"
            />
          </div>
          <div className="flex flex-col relative">
            <label
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 "
              for="password"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter password"
            />
          </div>

          <div className="flex flex-col relative">
            <label
              className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 "
              for="company"
            >
              Company Name
            </label>
            <input
              required
              type="text"
              id="company"
              name="company"
              className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300"
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-6">
              <label className="accent-violet-600 inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  defaultChecked
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="accent-violet-600 inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
          <div className="mt-auto pt-20">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded"
            >
              {" "}
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
