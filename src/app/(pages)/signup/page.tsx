import RegisterForm from "./components/registerform";
import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div className="bg-white relative w-[100vw] min-h-[100vh] overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row w-full h-auto aspect-auto lg:aspect-[1920/1000]">
        <div className="w-[100vw] lg:w-[50vw] h-full pb-[25px] sm:pb-[30px] md:pb-[35px] lg:pb-[0px] relative flex items-center justify-center">
          <div
            className="w-[82.2vw] lg:w-[39.6vw] h-auto aspect-auto lg:aspect-[760/696] flex flex-col mt-[10px] sm:mt-[15px] md:mt-[20px]"
            data-aos="fade-right"
          >
            <text className="font-medium text-[20px] sm:text-[28px] md:text-[36px] xl:text-[27px] lg:text-[20px] mb-[10px] sm:mb-[12px] md:mb-[15px] xl:mb-[25px] lg:mb-[18px] text-poppins">
              Welcome!
            </text>
            <text className="font-medium text-[12px] sm:text-[16px] md:text-[20px] xl:text-[14px] lg:text-[11px] mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[60px] lg:mb-[30px] text-poppins text-[#000000]">
              Sign up for an account by filling the required information
            </text>
            <RegisterForm />
          </div>
        </div>

        <div className="hidden lg:flex w-[50vw] h-full aspect-[360/300] absolute bg-[#11406A] z-10 opacity-60 right-0"></div>

        <div className="hidden w-[50vw] h-full relative lg:flex items-center justify-center">
          <div
            className="z-10 flex justify-center flex-col items-center"
            data-aos="fade-up "
          >
            <text className="text-[40px] xl:text-[40px] lg:text-[32px] text-white text-shadow font-semibold mb-[30px] xl:mb-[30px] lg:mb-[15px] text-poppins">
              Have an Account?
            </text>
            <text className="w-[28.85vw] text-[24px] xl:text-[24px] lg:text-[18px] text-white text-shadow font-medium mb-[40px] xl:mb-[40px] lg:mb-[25px] text-center text-poppins">
              Log back into your account by clicking the button below
            </text>
            <Link
              className="bg-[#2E3362] hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[6.77vw] h-auto aspect-[130/47] rounded-[15px] flex items-center justify-center"
              href="/login"
            >
              <text className="text-white font-bold text-[12px] xl:text-[12px] lg:text-[10px] text-poppins">
                Log In
              </text>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
