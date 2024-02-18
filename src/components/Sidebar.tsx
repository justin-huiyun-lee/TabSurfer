"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { BsSearch } from "react-icons/bs";
import { Skeleton } from "./ui/skeleton";
import { TbExternalLink } from "react-icons/tb";
import Workspaces from "./Workspaces";
import { UserButton } from "@clerk/nextjs";

const Sidebar = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [updatedData, setUpdatedData] = useState(data);

  const handleItemClick = (index) => {
    // Set the selected item
    setSelectedItem(index);
    // Update the 'active' status of items
    const newData = updatedData.map((item, i) => ({
      ...item,
      active: i === index ? true : false,
    }));
    // Update the state with the new data
    setUpdatedData(newData);
    Workspaces(data, index);
  };

  return (
    <div className="flex h-screen w-1/4 flex-col justify-between border-r-2 bg-[#ededed] p-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <Input placeholder="Search" />
          <BsSearch className="ml-3 cursor-pointer text-2xl duration-300 hover:scale-90" />
        </div>
        <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-300"></div>
        <div className="mt-4 flex flex-col align-top">
          {updatedData.map((item, index) => (
            <div
              key={index}
              className={`mb-2 flex cursor-pointer items-center justify-between rounded-md py-2 pl-4 font-medium text-black duration-150 hover:bg-gray-900 hover:text-white ${index === selectedItem ? "bg-gray-800 text-gray-50 hover:bg-gray-700 hover:text-white" : "bg-gray-50"}`}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
              <TbExternalLink className="pr-2 text-3xl text-gray-500 duration-300 hover:text-gray-50" />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-24">
        <button className="mb-4 w-full rounded bg-gray-300 text-3xl text-white duration-300 hover:scale-95">
          +
        </button>
        <div className="mb-4 h-1 w-full place-self-center rounded-full bg-gray-300"></div>
        <div className="flex">
          <Skeleton className="h-12 min-w-12 rounded-full bg-gray-300" />
          <div className="ml-4 mt-2 flex w-full flex-col">
            <Skeleton className="mb-1 h-1/3 w-[80%] rounded-full bg-gray-300" />
            <Skeleton className="h-1/3 w-[40%] rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 scale-150">
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
