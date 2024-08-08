import React from "react";
import { FaMap } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";

export default function Header() {
  return (
    <div className="flex justify-between py-5 px-10 border-b-2 ">
      <span className="flex items-center gap-2 text-2xl">
        <FaMap className="text-3xl" />
        <p className="font-bold">WhatBytes</p>
      </span>
      <div className="p-1 border-2 gap-1 border-gray-200 flex items-center rounded-md">
        <Avatar className="bg-gray-100 w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-bold text-sm p-1">Aaryan Singh</p>
      </div>
    </div>
  );
}
