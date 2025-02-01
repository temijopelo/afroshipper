import React, { useState } from "react";

export default function SidebarLinks({ icon, label, hoverIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <li
        className="rounded-lg transition duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className={`flex items-center space-x-4 p-2 rounded-lg transition-all ${
            isHovered ? "bg-[#EAAA08] text-[#0C0F5C]" : "text-white"
          }`}
        >
          <img
            src={isHovered && hoverIcon ? hoverIcon : icon}
            alt={label}
            className="transition-all duration-300"
          />
          <span>{label}</span>
        </span>
      </li>
    </div>
  );
}
