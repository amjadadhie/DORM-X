"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter from "next/router"

const Nav = () => {
  const router = useRouter(); // Add useRouter() hook
  const handleSignOut = async () => {
    await signOut();
    router.push("/login"); // Push to login page
  };

  return (
    <div>
      <nav className="bg-[#4D82B6]  fixed w-full z-20 top-0 start-0 border-b ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./assets/dorm-x-logo.svg"
              className="h-8"
              alt="Dorm-X Logo"
            />
            <span className="self-center text-white text-2xl font-bold whitespace-nowrap dark:text-white">
              Dorm-X
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  gap-x-4 text-white">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:text-blue-950 md:px-5"
                  aria-current="page"
                >
                  Order
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleSignOut();
                    router.push("/login"); // Push to login page
                  }}
                  className="block py-2 px-3 bg-[#FC97A3] rounded-lg hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
