"use client";

import React from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  roleAccess: string;
}

export default function LoginForm({ roleAccess }: LoginFormProps) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      console.log("kepencet gak sih");
      // Perform login authentication logic here
      const res = await signIn("credentials", {
        redirect: false,
        username: loginUsername,
        password: loginPassword,
        callbackUrl: "/",
      });
      console.log(res);
      console.log("Masuk sini");
      // print error if error
      if (res?.error) {
        console.log("error");
        toast.error("Invalid credentials");
      } else {
        toast.success("Login success");
        console.log(res);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
        <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
          Username
        </text>
        <input
          className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
          type="username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          placeholder="username"
        />
      </div>

      <div className="mb-[20px] sm:mb-[25px] md:mb-[30px] xl:mb-[35px] lg:mb-[25px] text-poppins flex flex-col">
        <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
          Password
        </text>
        <input
          className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
          type="password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      <div className="w-[82.2vw] lg:w-[39.4vw] flex justify-center text-poppins">
        <button
          type="submit"
          className="btn btn-primary hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[17.5vw] lg:w-[5.93vw] h-auto aspect-[63/26] lg:aspect-[114/47] text-[#2E3362] border-[#2E3362] border-[3px] rounded-[8px] lg:rounded-[15px] flex items-center justify-center"
          onClick={handleLogin}
        >
          <text className="text-[#2E3362] font-bold text-[12px] sm:text-[15px] md:text-[18px] xl:text-[12px] lg:text-[10px] text-poppins">
            Log In
          </text>
        </button>
      </div>
    </div>
  );
}
