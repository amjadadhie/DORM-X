// src/components/UserProfile/UserProfile.tsx
"use client";
import React, { useEffect, useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "../userFetcher";

export default async function Profile(req: any) {
  // const session = await getServerSession(authOptions);
  // const user = session?.user as UserSession;
  const [dataPenghuni, setDataPenghuni] = useState([]);
  const id = req;
  useEffect(() => {
    const fetchDataPenghuni = async () => {
      try {
        const res = await fetch("/api/penghuni-id");
        const res2 = await res.json();
        setDataPenghuni(res2);
        console.log(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchDataPenghuni();
  }, []);
  
  return (
    <div className="flex items-center p-4 bg-white  shadow-md">
      <div className="flex-shrink-0">
        <Image
          src="/assets/profile-icon.svg"
          alt="Profile Icon"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <div className="flex flex-col gap-y-2 px-8">
          <div className="text-5xl font-bold  text-[#11406A]">Profile</div>
          <div className="text-[#11406A] text-2xl">Name: </div>
          <div className="text-[#11406A] text-2xl">Room Number: 20</div>
          <div className="text-[#11406A] text-2xl">
            This Month’s Total Bill: 
          </div>
          <div className="flex items-center text-[#11406A] mt-1 text-2xl">
            <FaMoneyBillWave className="text-green-500" />
            <span className="ml-2">IDR 50.000</span>
          </div>
        </div>
      </div>
    </div>
  );
};


