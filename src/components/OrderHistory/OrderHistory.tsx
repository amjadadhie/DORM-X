"use client";
import React, { useState, useEffect } from "react";
// Define the type for your order data

type Order = {
  timestamp: string;
  session: number;
  petugasKebersihan: string;
  nomorKamar: number;
  status: boolean; // assuming 'false' corresponds to 'requested' and 'true' to 'inProgress'
  notes: string;
  id: string;
};

// Define a function component
const CurrentOrder: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/order-user");
        const res2 = await response.json();
        setOrders(res2);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  // Function to determine the background color based on the order status  // Function to determine the background color based on the order status
  const statusBgColor = (status: string): string => {
    switch (status) {
      case "In Progress":
        return "bg-[#FDD57C]";
      case "Requested":
        return "bg-[#FC97A3]";
      case "Done":
        return "bg-[#66B19B]";
      default:
        return "bg-[#4D82B6]";
    }
  };

  return (
    <div className=" ">
      <div className="font-bold text-xl text-white mt-8 ml-4">
        Current Order
      </div>

      <div className="bg-white rounded-lg shadow p-6 m-4">
        {orders.map((order, index) => {
          return (
            <div
              key={order.id}
              className={`flex items-center border-b-2 border-black ${
                index < orders.length - 1 ? "mb-4" : ""
              }`}
            >
              <div
                className={`h-3 w-3 rounded-full ${statusBgColor(
                  order.status
                )} mr-4`}
              ></div>
              <div className="flex-grow">
                <div className="font-medium">
                  Room No. {order.nomorKamar} - {order.session}
                </div>
                <div className="text-gray-600">
                  {new Date(order.timestamp).toLocaleDateString()}
                </div>
              </div>
              <div
                className={`rounded text-black px-2 py-1 text-xs ${statusBgColor(
                  order.status
                )}`}
              >
                {order.status.toString().charAt(0).toUpperCase() +
                  order.status.toString().slice(1)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentOrder;
