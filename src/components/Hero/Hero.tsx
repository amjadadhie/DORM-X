"use client"
import React from "react";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
// import { UserSession } from "../userFetcher";

export default async function Hero() {
  // const session = await getServerSession(authOptions);
  // const user = session?.user as UserSession

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
      <h1 className="text-4xl font-bold text-[#11406A] ml-4">Hi, Lisa!</h1>
      <p className="text-2xl text-[#11406A] ml-4">
        Need help to clean your room?
      </p>
    </div>
  );
};
