"use client";
import React from "react";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import Hero from "../../../components/Hero/Hero";
import CleaningRequest from "../../../components/CleaningRequest/CleaningRequest";
import UserProfile from "../../../components/UserProfile/UserProfile";
import OtherDesign from "../../../components/OtherDesign/OtherDesign";
import Footer from "../../../components/Footer/Footer"

const page = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <div className="grid grid-cols-2 gap-x-4 bg-[#4D82B6]">
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <CleaningRequest />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[49%]">
          <UserProfile />
        </div>
        <div className="w-[1%] bg-[#4D82B6] rounded-xl my-2"></div>
        <div className="w-[50%]">
          <OtherDesign />
        </div>
      </div>
<Footer/>
    </div>
  );
};

export default page;
