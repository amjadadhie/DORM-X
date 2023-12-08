"use client";
import React from "react";
import NavigationBarAdmin from "../../../components/NavigationBarAdmin/NavigationBarAdmin";

import Footer from "../../../components/Footer/Footer";

const page = () => {
  return (
    <div>
      <NavigationBarAdmin/>
        <main className="w-full h-full bg-white">
            <h1 className="text-[#11406A] text-2xl font-bold">Hi, Admin!</h1>
            <p className="text-[#11406A]">Ready to clean the rooms?</p>
        </main>
      <Footer />
    </div>
  );
};

export default page;
