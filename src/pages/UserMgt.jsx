import React from "react";
import Table from "../components/Table";

export const UserMgt = () => {
  const columns = ["Location", "Email", "IPAddress", "Time", "ActivityStatus"];
  const data = [
    {
      Location: "Australia",
      Email: "Chrome - Windows",
      IPAddress: "207.40.22.358",
      Time: "3 days ago",
      ActivityStatus: "Active",
    },
    {
      Location: "Australia",
      Email: "Safari - iOS",
      IPAddress: "207.40.22.358",
      Time: "3 days ago",
      ActivityStatus: "Active",
    },
    {
      Location: "Australia",
      Email: "Chrome - Windows",
      IPAddress: "207.40.22.358",
      Time: "last week",
      ActivityStatus: "expired",
    },
    {
      Location: "Australia",
      Email: "Safari - iOS",
      IPAddress: "207.40.22.358",
      Time: "3 days ago",
      ActivityStatus: "Signed out",
    },
    {
      Location: "Australia",
      Email: "Chrome - Windows",
      IPAddress: "207.40.22.358",
      Time: "last week",
      ActivityStatus: "Signed out",
    },
  ];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img src="/images/userImg.svg" alt="User_Img" />
          <span className="absolute bottom-0 right-0">
            <img src="/images/icon/Verifiedtick.svg" alt="" />
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Abdullah Nasir</h3>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <ul className="flex border-b-[1px] text-[#667085] ">
          <li className="p-4 hover:text-[#0B0E54] border-b-2 border-transparent hover:border-[#0B0E54] ">
            Overview
          </li>
          <li className="p-4 hover:text-[#0B0E54] border-b-2 border-transparent hover:border-[#0B0E54] ">
            Branch
          </li>
          <li className="p-4 hover:text-[#0B0E54] border-b-2 border-transparent hover:border-[#0B0E54] ">
            KYC Document
          </li>
          <li className="p-4 hover:text-[#0B0E54] border-b-2 border-transparent hover:border-[#0B0E54] ">
            Activity Log
          </li>
        </ul>

        <div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};
