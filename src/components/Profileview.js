import React from "react";

const ProfileView = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-50 px-4 py-6">
      <div className="w-full sm:max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-left text-black">
          Account Settings
        </h1>

        <div className="bg-gray-100 p-4 rounded-lg mb-4 ">
          <div className="flex items-start space-x-6">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
              />
              <span className="absolute bottom-1 right-1 bg-purple-600 text-white rounded-full p-2 w-9 h-9 flex items-center justify-center shadow-lg cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 7h-3.17l-1.41-1.41A2 2 0 0 0 14 5h-4a2 2 0 0 0-1.41.59L7.17 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                </svg>
              </span>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-0">
                Marry Doe
              </h2>
              <p className="text-l text-black mb-4">Marry@Gmail.Com</p>
            </div>
          </div>
          <p className="text-black text-sm leading-relaxed pt-2">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <div className="border-t border-dashed border-gray-400 mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;