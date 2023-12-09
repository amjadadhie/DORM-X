"use client";
// src/components/UserProfile/UserProfile.tsx
import React, { useEffect, useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import Image from "next/image";

export default function Profile() {
  const [dataPenghuni, setDataPenghuni] = useState<any[]>([]);

  useEffect(() => {
    const fetchDataPenghuni = async () => {
      try {
        const res = await fetch("/api/penghuni-id");
        const res2 = await res.json();
        setDataPenghuni(res2);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchDataPenghuni();
  }, []);

  useEffect(() => {
    console.log(dataPenghuni);
  }, [dataPenghuni]);

  return (
    <div className="flex items-center p-4 bg-white shadow-md">
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
          <div className="text-5xl font-bold text-[#11406A]">Profile</div>
            console.log(dataPenghuni);
          {/* Check if dataPenghuni is an array */}
          {Array.isArray(dataPenghuni) && dataPenghuni.length > 0 ? (
            dataPenghuni.map((penghuni: any) => (
              <div key={penghuni.id}>
                <div className="text-[#11406A] text-2xl">
                  Name: {penghuni.nama}
                </div>
                <div className="text-[#11406A] text-2xl">
                  Room Number: {penghuni.nomorKamar}
                </div>
                <div className="text-[#11406A] text-2xl">
                  This Month’s Total Bill:{" "}
                  <span className="flex items-center text-[#11406A] mt-1 text-2xl">
                    <FaMoneyBillWave className="text-green-500" />
                    <span className="ml-2">IDR {penghuni.tagihan}</span>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>Data Penghuni is empty or not an array</p>
          )}
        </div>
      </div>
    </div>
  );
}
