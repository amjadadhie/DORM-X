import React from "react";
import NavigationBar from "../../../components/NavigationBar/NavigationBar";
import Hero from "../../../components/Hero/Hero";
import OrderHistory from "../../../components/OrderHistory/OrderHistory";
import CleaningRequest from "../../../components/CleaningRequest/CleaningRequest";
import UserProfile from "../../../components/UserProfile/UserProfile";
import OtherDesign from "../../../components/OtherDesign/OtherDesign";
import Footer from "../../../components/Footer/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "@/components/userFetcher";

async function page() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserSession;
  const id = user?.id;
  console.log(id);

  return (
    <div>
      <NavigationBar />
      <Hero />
      <div className="flex flex-row bg-[#4D82B6]">
        <div className="w-[49%]">
          <OrderHistory />
        </div>
        <div className="w-[1%] bg-white rounded-xl my-8"></div>
        <div className="w-[49%]">
          <CleaningRequest id={id} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[49%]">
          <UserProfile/>
        </div>
        <div className="w-[1%] bg-[#4D82B6] rounded-xl my-2"></div>
        <div className="w-[50%]">
          <OtherDesign />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
