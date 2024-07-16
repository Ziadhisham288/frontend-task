import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full w-full bg-gray-900 flex flex-col text-white">
      <Link to={"/home"} className="mb-10">
        <h1 className="text-center  text-3xl font-semibold pt-5">BANK APP</h1>
      </Link>

      <div id="main" className>
        <h2 className="mb-2 px-2 text-gray-600 ">Main</h2>
        <div className="linksList mb-10">
          <ul className="flex flex-col cursor-pointer">
            <Link to={"/home"}>
              <li className="py-2 px-2 mb-1 hover:bg-green-600">Dashboard</li>
            </Link>
            <li className="py-2 px-2 mb-1 hover:bg-green-600">Payment</li>
            <li className="py-2 px-2 mb-1 hover:bg-green-600">Cards</li>
            <li className="py-2 px-2 mb-1 hover:bg-green-600">Insights</li>
          </ul>
        </div>
        <h2 className="mb-2 px-2 text-gray-600">Other</h2>
        <div className="otherList">
          <ul className="flex flex-col cursor-pointer">
            <li className="py-2 px-2 mb-1 hover:bg-green-600">
              Customer support
            </li>
            <li className="py-2 px-2 mb-1 hover:bg-green-600">Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
