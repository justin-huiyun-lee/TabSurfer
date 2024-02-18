"use client"
import React, { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";

const Workspaces = ({ data }) => {
  // State to track the active workspace index
  const [activeIndex, setActiveIndex] = useState(0);

  // Find the active workspace and update the index
  useEffect(() => {
    const foundIndex = data.findIndex((workspace) => workspace.active);
    setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
  }, [data]);

  return (
    <div className="h-full w-full">
      <div className="flex justify-between mt-4">
        <h1 className="flex-grow text-3xl font-medium ml-2">
          {data[activeIndex]?.title}
        </h1>
        <TbExternalLink className="mr-2 pr-2 text-3xl text-black duration-300 hover:text-gray-500 justify-right" />
      </div>
      <div className="mt-4 h-1 w-full place-self-center bg-black overflow-hidden"></div>
      {data[activeIndex]?.urls.map((url, index) => (
        <React.Fragment key={index}>
          <div className="flex my-4">
            <h3 className="flex-grow text-md font-medium ml-2 hover:underline text-gray-700 hover:text-black">
              {url}
            </h3>
            <TbExternalLink className="mr-2 pr-2 text-3xl hover:text-black duration-300 text-gray-700 justify-right" />
          </div>
          <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-600"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Workspaces;
