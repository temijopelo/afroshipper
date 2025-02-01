import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between px-9 py-3 border-b-2">
        <div className="flex w-[514px] rounded-xl bg-[#F2F4F7] p-3 items-center space-x-2">
          <span>
            <RiSearchLine color="#667085" />
          </span>
          <span className="flex-1">
            <input
              className="bg-transparent border-none w-full outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <span>
            <img src="/images/icon/IconBells.svg" alt="notification" />
          </span>
          <span>
            <img src="/images/Avatar.svg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
