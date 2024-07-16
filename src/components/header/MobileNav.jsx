// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function MobileNav({ menu, logo, onOpen, hideLeft, onClose }) {
  return (
    <div className="h-16 flex items-center justify-between px-6 lg:px-12 ">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiMiniBars3BottomRight className="h-7 w-7" />
      </button>

      <div
        className={`transition-all w-full h-full fixed bg-primary z-40 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute top-6 right-6">
          <IoCloseCircle className="h-7 w-7" />
        </button>

        <div>
          <ul className=" flex flex-col gap-7 text-center">
            {menu?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-7 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Log In
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded border">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
