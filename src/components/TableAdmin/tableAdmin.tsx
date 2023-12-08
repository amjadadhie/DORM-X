"use client";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { PiArrowSquareOut } from "react-icons/pi";

function TableAdmin({ header }: { header: any[] }) {
  const [status, setStatus] = useState("");
  const [petugas, setPetugas] = useState("");
  const [orderID, setOrderID] = useState();

  const handleSubmit = async() => {
    try{
      const res = await fetch("/api/change-status",
      {
        method: "PATCH",
        body: JSON.stringify({
          orderID: orderID,
          newStatus : status,
          newPetugas : petugas,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    catch (error) {
      console.error("Error fetching orders:", error);}
  }

  return (
    <div className="w-[1368px] mt-[23.54px] lg:mt-[30px] overflow-x-hidden">
      <div className="mb-4 lg:mb-8 flex items-center justify-between"></div>
      <table className="w-full">
        <thead className="bg-[#4D82B6] border-[1px] border-[#4D82B6]">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-white text-center py-[8px] text-[10px] lg:text-[16px] xl:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="border-x-[1px] border-black">
          {/* {filteredData.map((packageInfo) => {
            return ( */}
          <tr
            // key={packageInfo.packageID}
            className="border-b-[1px] border-black border-collapse box-content"
          >
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
              <div>10</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <div>3</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <div>20</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <div>20</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <select placeholder="status" className="rounded-lg text-[#4D82B6] border-[#4D82B6]">
                <option value="1">Done</option>
                <option value="2">In Progress</option>
                <option value="3">Requested</option>
              </select>
            </td>
            <td className="flex justify-center w-auto h-auto lg:py-[36px] py-[42px] align-middle items-center">
              <select placeholder="petugas" className="rounded-lg text-[#4D82B6] border-[#4D82B6]">
                <option value="1">Amjad</option>
                <option value="2">Auva</option>
                <option value="3">Marvel</option>
                <option value="4">Raka</option>
                <option value="5">Tina</option>
              </select>
            </td>
            <td className="w-auto h-auto py-0">
              <div className="w-full flex justify-center">
                <button className="w-[30px] h-[40px] rounded-full bg-[#11406A] text-white flex justify-center items-center px-10 font-semibold hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
                  <p>Save</p>
                </button>
              </div>
            </td>
          </tr>
          {/* ); */}
          {/* })} */}
        </tbody>
      </table>
    </div>
  );
}

export default TableAdmin;
