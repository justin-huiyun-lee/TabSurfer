"use client";
import { Input } from "./ui/input";
import React, { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";

const Workspaces = ({ data }) => {
  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  let activeIndex = 0;

  // Find the active workspace and update the index
  useEffect(() => {
    const foundIndex = data.findIndex((workspace) => workspace.active);
    if (foundIndex !== -1) {
      activeIndex = foundIndex;
    } else {
      activeIndex = 0;
    }
  }, [data]);

  function openMultipleURLs(urls) {
    urls.reverse().forEach(function (url) {
      window.open(url);
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    
    data[activeIndex].urls.push(url);
    setUrl("");
  }

  function deleteElement(e, index: number) {
    e.preventDefault();
    data[index].urls.pop(url);
  }

  return (
    <div className="-mt-4 flex h-full w-full scale-90 flex-col rounded-2xl border px-4 shadow-lg">
      <div className="mt-4 flex justify-between">
        <h1 className="ml-2 flex-grow p-4 text-3xl font-medium">
          {data[activeIndex]?.title}
        </h1>
        <TbExternalLink
          className="mr-2 pr-2 text-3xl text-black duration-300 hover:text-gray-500"
          onClick={() => {
            openMultipleURLs(data[activeIndex].urls);
          }}
        />
      </div>
      <div
        className="mt-4 h-1 w-full flex-grow place-self-center overflow-hidden bg-black"
        onClick={openMultipleURLs}
      ></div>
      <div className="h-[70vh]">
        {data[activeIndex]?.urls.map((url, index) => (
          <React.Fragment key={index}>
            <div className="my-4 flex">
              <h3 className="text-md ml-2 flex-grow font-medium text-gray-700 hover:text-black hover:underline">
                {url}
              </h3>
              <TbExternalLink
                className="justify-right mr-2 cursor-pointer pr-2 text-3xl text-gray-700 duration-300 hover:text-black"
                onClick={() => {
                  window.open(url);
                }}
              />
              <FaRegTrashCan
                className="mr-2 cursor-pointer pr-2 text-3xl text-red-400 duration-300 hover:text-red-800"
                onClick={(e) => {
                  deleteElement(e, index);
                }}
              />
            </div>
            <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-400"></div>
          </React.Fragment>
        ))}
      </div>
      <form onSubmit={formSubmit} className="mb-4">
        <div className="flex flex-row">
          <Input
            type="text"
            placeholder="+ Add a url"
            onChange={handleUrlChange}
            className="ml-12 w-[70vw] border-black"
          />
          <button
            className="mb-4 ml-4 mt-0.5 h-[2.5vw] w-[2.5vw] rounded bg-gray-800 text-3xl text-white duration-300 hover:scale-95"
            type="submit"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Workspaces;
