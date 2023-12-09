"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

function TableAdmin({ header }: { header: any[] }) {
  const [status, setStatus] = useState("");
  const [petugas, setPetugas] = useState("");
  const [orderID, setOrderID] = useState();
  const [orderData, setOrderData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/all-order");
        const res2 = await res.json();
        setOrderData(res2);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log(orderData); // This will log the updated orderData when it changes
  }, [orderData]); // Only re-run this effect if orderData changes
  
  const handleSubmit = async(req1: any, req2: any, req3: any) => {
    try{
      const res = await fetch("/api/change-status",
      {
        method: "PATCH",
        body: JSON.stringify({
          orderID: req1,
          newStatus : req2,
          newPetugas : req3,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        toast.success("Update Success!");
      } else {
        toast.error("Failed to update");
      }
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
          {orderData.map((order,index) => {
            return (
          <tr
            key={order.id}
            className="border-b-[1px] border-black border-collapse box-content"
          >
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[12px] xl:text-[20px] text-center">
              <div>{order.orderID}</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <div>{order.nomorKamar}</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <div>{order.session}</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <div>{order.notes}</div>
            </td>
            <td className="overflow-hidden w-auto h-auto py-[36px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
              <select placeholder="status" onChange={(e) => setStatus(e.target.value)} className="rounded-lg text-[#4D82B6] border-[#4D82B6]">
                <option value="Requested" >Requested</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </td>
            <td className="flex justify-center w-auto h-auto lg:py-[36px] py-[42px] align-middle items-center">
              <select placeholder="petugas" onChange={(e) => setPetugas(e.target.value)} className="rounded-lg text-[#4D82B6] border-[#4D82B6]">
                <option value="Amjad">Amjad</option>
                <option value="Auva">Auva</option>
                <option value="Marvel">Marvel</option>
                <option value="Raka">Raka</option>
                <option value="Tina">Tina</option>
              </select>
            </td>
            <td className="w-auto h-auto py-0">
              <div className="w-full flex justify-center">
                <button onClick={() => handleSubmit(order.orderID, status, petugas)} className="w-[30px] h-[40px] rounded-full bg-[#11406A] text-white flex justify-center items-center px-10 font-semibold hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
                  <p>Save</p>
                </button>
              </div>
            </td>
          </tr>
            )})}
        </tbody>
      </table>
    </div>
  );
}

export default TableAdmin;
