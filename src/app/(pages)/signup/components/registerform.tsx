"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerNama, setRegisterNama] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerNoKamar, setRegisterNoKamar] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: registerUsername,
          password: registerPassword,
          nama: registerNama,
          nomorKamar: registerNoKamar,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        toast.success("Successfully Register!");
        router.push("/login");
      } else {
        toast.error("Failed to Register");
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
          type="text"
          value={registerUsername}
          onChange={(e) => setRegisterUsername(e.target.value)}
          placeholder="Username"
        />
      </div>

      <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
        <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
          Nama
        </text>
        <input
          className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
          type="nama"
          value={registerNama}
          onChange={(e) => setRegisterNama(e.target.value)}
          placeholder="Nama"
        />
      </div>

      <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
        <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
          Password
        </text>
        <input
          className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
          type="password"
          value={registerPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      <div className="mb-[10px] sm:mb-[15px] md:mb-[20px] xl:mb-[20px] lg:mb-[15px] text-poppins flex flex-col">
        <text className="font-medium text-[11px] sm:text-[15px] md:text-[18px] xl:text-[14px] lg:text-[12px] mb-[10px] sm:mb-[13px] md:mb-[15px] xl:mb-[20px] lg:mb-[15px] text-poppins">
          No.Kamar
        </text>
        <input
          className="form-control w-[82.2vw] lg:w-[39.6vw] h-auto aspect-[296/28] lg:aspect-[760/48] rounded-[5px] lg:rounded-[15px] bg-[#E6EAF4] pl-[2.7vw] lg:pl-[1.25vw] text-[11px] sm:text-[15px] md:text-[18px] xl:text-[13px] lg:text-[11px]"
          type="No. Kamar"
          value={registerNoKamar}
          onChange={(e) => setRegisterNoKamar(e.target.value)}
          placeholder="No. Kamar"
        />
      </div>

      <div className="w-[82.2vw] lg:w-[39.4vw] flex justify-center">
        <button
          type="submit"
          className="btn btn-primary hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] w-[17.5vw] lg:w-[5.93vw] h-auto aspect-[63/26] lg:aspect-[114/47] text-[#2E3362] border-[#2E3362] border-[3px] rounded-[8px] lg:rounded-[15px] flex items-center justify-center"
          onClick={handleRegister}
        >
          <text className="text-[#2E3362] font-bold text-[12px] sm:text-[15px] md:text-[18px] xl:text-[12px] lg:text-[10px] text-poppins">
            Sign Up
          </text>
        </button>
      </div>
    </div>
  );
}
