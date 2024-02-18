"use client"
import { useState } from 'react';
import { Input } from "./ui/input";
import { BsSearch } from "react-icons/bs";
import { Skeleton } from "./ui/skeleton";
import { TbExternalLink } from "react-icons/tb";
import WorkspaceUpdateIndex from './Workspaces';

const Sidebar = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedData, setUpdatedData] = useState(data);

  const handleItemClick = (index) => {
    // Set the selected item
    setSelectedItem(index);
    // Update the 'active' status of items
    const newData = updatedData.map((item, i) => ({
      ...item,
      active: i === index ? true : false
    }));
    // Update the state with the new data
    setUpdatedData(newData);
    WorkspaceUpdateIndex(index);
  };

  return (
    <div className="flex h-screen w-1/4 flex-col justify-between border-r-2 bg-[#ededed] p-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <Input placeholder="Search" />
          <BsSearch className="ml-3 text-2xl duration-300 hover:scale-95" />
        </div>
        <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-300"></div>
        <div className="flex flex-col align-top mt-4">
          {
            updatedData.map((item, index) => (            
              <div 
                key={index} 
                className={`pl-4 rounded-md mb-2 font-medium py-2 hover:bg-gray-900 hover:text-white duration-100 cursor-pointer flex justify-between items-center text-gray-500 ${index === selectedItem ? 'bg-gray-800 text-gray-50 hover:bg-gray-700 hover:text-white' : 'bg-gray-50'}`} 
                onClick={() => handleItemClick(index)}
              >
                {item.title}
                <TbExternalLink className = "text-3xl pr-2 text-gray-500 hover:text-gray-50 duration-300" />
              </div>
            ))
          }
        </div>
      </div>
      
      <div className="mb-24">
        <button className = "text-3xl mb-4 w-full bg-gray-300 duration-300 text-white hover:scale-95 duration-300 rounded">+</button>
        <div className="mb-4 h-1 w-full place-self-center rounded-full bg-gray-300"></div>
        <div className="flex">
          <Skeleton className="h-12 min-w-12 rounded-full bg-gray-300" />
          <div className="ml-4 mt-2 flex w-full flex-col">
            <Skeleton className="mb-1 h-1/3 w-[80%] rounded-full bg-gray-300" />
            <Skeleton className="h-1/3 w-[40%] rounded-full bg-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;