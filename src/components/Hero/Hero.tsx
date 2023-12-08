import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="w-full flex flex-col justify-start items-start p-5 text-left mt-16"
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

export default Hero;
