"use client";
import { MdMeetingRoom } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import Image from "next/image"; // If you're using Next.js Image component
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CleaningRequest(id: Number) {
  const [sessionSelected, setSessionSelected] = useState<string>("");
  const [catatan, setCatatan] = useState("");
  const [available, setAvailable] = useState<boolean>(false);
  const [userRoomNumber, setUserRoomNumber] = useState("");
  console.log(id);

  useEffect(() => {
    const fetchAvailOrder = async () => {
      try {
        // const res = await fetch("/api/order-avail", {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });
        // const res2 = await res.json();
        // setAvailable(res2);
        const res = await fetch("/api/order-avail");
        const res2 = await res.json();
        setAvailable(res2);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (sessionSelected) {
      fetchAvailOrder();
    }
  }, [sessionSelected]);

  console.log(sessionSelected);
  console.log(available);

  const handleSubmit = async () => {
    console.log(sessionSelected);
    console.log(available);
    if (available) {
      try {
        const response = await fetch("/api/order-request", {
          method: "POST",
          body: JSON.stringify({
            SessionId: sessionSelected,
            notes: catatan,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(sessionSelected);
        if (response.status === 200) {
          toast.success("Successfully order cleaning service!");
        } else {
          toast.error("Failed to order");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    } else {
      toast.error("You already order cleaning service!");
    }
  };
  // useEffect(() => {
  //   const fetchRoomNumber = async () => {
  //     const session = await getSession(); // Mendapatkan informasi sesi pengguna

  //     if (session && session.user && session.user.nomorKamar) {
  //       setUserRoomNumber(session.user.nomorKamar);
  //       // Lakukan sesuatu dengan nomor kamar dari pengguna yang sedang login
  //       console.log('Nomor kamar pengguna:', userRoomNumber);
  //     }
  //   };

  //   fetchRoomNumber();
  // }, []);

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
            <div className="flex flex-col h-[20%] gap-y-2">
              <div className="flex items-center gap-x-2 ">
                <MdMeetingRoom className="text-[#4D82B6]" size={18} />
                <span className="p-2  w-full border-b border-[#11406A]">
                  Room No.
                </span>
              </div>

              {/* Session Select */}
              <div className="flex items-center w-full">
                <FaRegClock className="text-[#4D82B6]" size={18} />
                <select
                  id="sessionSelect"
                  name="sessionSelect"
                  value={sessionSelected}
                  onChange={(e) => setSessionSelected(e.target.value)}
                  className="ml-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value={"morning"}>Morning</option>
                  <option value={"afternoon"}>Afternoon</option>
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
                onChange={(e) => setCatatan(e.target.value)}
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
              onClick={handleSubmit}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-xl text-center font-bold rounded-lg shadow-sm text-white bg-[#11406A] w-full hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
