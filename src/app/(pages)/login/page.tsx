import LoginForm from "./components/loginform";
import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserSession } from "@/components/userFetcher";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);
  const user = session?.user as UserSession;
  const roleAccess = user?.role;

  if (roleAccess === "PENGHUNI") {
    redirect("/user-dashboard");
  }
  if (roleAccess === "ADMIN") {
    redirect("/admin-dashboard");
  }

  return (
    <div className="bg-white relative w-[100vw] h-full overflow-hidden">
      <div className="hidden lg:flex w-[50vw] h-full aspect-[360/300] absolute bg-[#11406A] z-10 opacity-60"></div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="hidden w-[50vw] h-auto aspect-[960/1000] relative lg:flex items-center justify-center">
          <div
            className="z-10 flex justify-center flex-col items-center"
            data-aos="fade-up"
          >
            <text className="text-shadow text-[40px] xl:text-[40px] lg:text-[32px] text-white font-semibold mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              New here?
            </text>
            <text className="w-[28.85vw] text-shadow text-[24px] xl:text-[24px] lg:text-[18px] font-medium mb-[40px] xl:mb-[40px] lg:mb-[25px] text-center text-poppins text-white">
              Sign Up to Dorm-X
            </text>
            <Link
              className="bg-[#2E3362] w-[6.77vw] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/signup"
            >
              <text className="text-white font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Sign Up
              </text>
            </Link>
          </div>
        </div>

        <div className="w-[100w] lg:w-[50vw] h-auto aspect-auto lg:aspect-[960/1000] pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[0px] relative flex items-center justify-center">
          <div
            className="w-[82.2vw] lg:w-[39.6vw] h-auto aspect-auto lg:aspect-[760/696] flex flex-col mt-[10px] sm:mt-[15px] md:mt-[20px]"
            data-aos="fade-left"
          >
            <text className="font-medium text-[20px] sm:text-[28px] md:text-[36px] xl:text-[27px] lg:text-[22px] mb-[10px] sm:mb-[12px] md:mb-[15px] xl:mb-[25px] lg:mb-[18px] text-poppins">
              Welcome back!
            </text>
            <text className="font-medium text-[12px] sm:text-[16px] md:text-[20px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[60px] lg:mb-[45px] text-poppins">
              Log onto your account by filling your account information
            </text>
            <LoginForm roleAccess={roleAccess} />
          </div>
        </div>
      </div>
    </div>
  );
}
