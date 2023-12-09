import React from "react";
import NavigationBarAdmin from "@/components/NavigationBarAdmin/NavigationBarAdmin";
import Footer from "@/components/Footer/Footer";
import TableAdmin from "@/components/TableAdmin/tableAdmin";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavigationBarAdmin />
      <main className="w-full h-auto bg-white pt-24 pb-12">
        <div className="ml-[56px]">
          <h1 className="text-[#11406A] text-[56px] font-bold">Hi, Admin!</h1>
          <p className="text-[#11406A] text-[32px]">
            Ready to clean the rooms?
          </p>
        </div>
        <div className="flex justify-center">
          <TableAdmin
            header={[
              "No",
              "No.Kamar",
              "Session",
              "Notes",
              "Status",
              "Petugas",
              "Save",
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
