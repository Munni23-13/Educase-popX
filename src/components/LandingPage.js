import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end items-center bg-gray-50 p-6">
      <div className="w-full sm:max-w-md text-left">
        <h1 className="text-xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
        </p>
        <button
          onClick={() => navigate("/create-account")}
          className="w-full text-white font-bold py-2 rounded mb-3 bg-primary"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-secondary text-black-700 font-bold py-2 rounded"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;