"use client"
import React from "react";
import { useState, useEffect } from "react";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import { UserSession } from "../userFetcher";

export default function Hero() {
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/userid")
      const data = await res.json()
      setUser(data)
    }
    fetchData()    
  }, [])

  return (
    <div
      className="w-full flex flex-col justify-start items-start px-5 py-12 text-left mt-16"
      style={{
        backgroundImage: "url('/assets/hero.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "450px", // adjust the height as you need
      }}
    >
      <h1 className="text-4xl font-bold text-[#11406A] ml-4">Hi, {user.nama} !</h1>
      <p className="text-2xl text-[#11406A] ml-4">
        Need help to clean your room?
      </p>
    </div>
  );
};
