"use client";

import React, { useState } from "react";
import { RiBarChartFill } from "react-icons/ri";
import { TfiMedallAlt } from "react-icons/tfi";
import { GoFile } from "react-icons/go";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="grid grid-cols-8 h-full">
      <div className="flex flex-col col-span-1 py-12 border-r-2">
        <ul className="flex flex-col gap-8 text-[0.9rem]">
          <li
            className="cursor-pointer"
            onClick={() => handleItemClick("Dashboard")}
          >
            <div
              className={`flex items-center gap-1 py-2 pl-8 pr-4 rounded-tr-full rounded-br-full ${
                selectedItem === "Dashboard" ? "bg-blue-200" : ""
              }`}
            >
              <RiBarChartFill />
              Dashboard
            </div>
          </li>
          <li
            className={`font-semibold flex items-center gap-1 cursor-pointer py-2 pl-8 pr-4 rounded-tr-full rounded-br-full ${
              selectedItem === "Skill Test" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleItemClick("Skill Test")}
          >
            <TfiMedallAlt />
            Skill Test
          </li>
          <li
            className={`font-semibold flex items-center gap-1 cursor-pointer py-2 pl-8 pr-4 rounded-tr-full rounded-br-full ${
              selectedItem === "Internship" ? "bg-blue-200" : ""
            }`}
            onClick={() => handleItemClick("Internship")}
          >
            <GoFile />
            Internship
          </li>
        </ul>
      </div>
      <div className="col-span-7 p-4">{children}</div>
    </div>
  );
}
