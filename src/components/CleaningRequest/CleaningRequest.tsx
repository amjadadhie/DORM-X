"use client";
import React from "react";
import { MdMeetingRoom } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import Image from "next/image"; // If you're using Next.js Image component

const CleaningRequest = () => {
  return (
    <div>
      <div className="flex flex-col p-4 ">
        <div className="flex justify-start my-4">
          <h2 className="font-bold text-xl text-white ">
            Room Cleaning Request
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-4 p-4 bg-white rounded-lg shadow-md">
          <div className="col-span-3 space-y-4">
            {/* Room Number Input */}
            <div className="flex flex-col h-[20%] ">
              <div className="flex items-center gap-x-2 ">
                <MdMeetingRoom className="text-[#4D82B6]" size={18} />
                <span className="p-2  w-full border-b border-[#11406A]">
                  Room No. 20
                </span>
              </div>

              {/* Session Select */}
              <div className="flex items-center w-full">
                <FaRegClock className="text-[#4D82B6]" size={18} />
                <select
                  id="sessionSelect"
                  name="sessionSelect"
                  className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Select Session</option>
                  {/* ... other options */}
                </select>
              </div>
            </div>

            {/* Note Input */}
            <div className="flex items-center h-[80%]">
              <CgNotes className="text-[#4D82B6]" size={18} />
              <textarea
                id="note"
                name="note"
                rows={8}
                className="ml-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Leave a note..."
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-center justify-start space-y-4">
            {/* Cleaning Image */}
            <div className="flex-shrink-0">
              {/* Replace with your actual image path */}
              <Image
                src="/assets/clean-picture.svg"
                alt="Clean"
                width={200}
                height={200}
              />
            </div>

            {/* Order Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-xl text-center font-bold rounded-lg shadow-sm text-white bg-[#11406A] w-full"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningRequest;
