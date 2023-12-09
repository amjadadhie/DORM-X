import React from "react";

import Image from "next/image";

const OtherDesign: React.FC = () => {
  return (
    <div className="grid grid-cols-2 items-center p-4 bg-white  shadow-md">
      <div className="flex flex-col gap-y-4">
        <div className="text-3xl font-bold  text-[#11406A]">
          Hope you like our services!
        </div>
        <div className="text-2xl text-[#11406A]">
          Need something else? Please contact our front service officer.
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <Image
          src="/assets/illustration.svg"
          alt="Illustration"
          width={300}
          height={300}
          className=""
        />
      </div>
    </div>
  );
};

export default OtherDesign;
