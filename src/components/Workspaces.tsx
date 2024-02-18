"use client"
import { Input } from "./ui/input";
import React, { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";

const Workspaces = ({ data }) => {
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
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex justify-between mt-4">
        <h1 className="flex-grow text-3xl font-medium ml-2">
          {data[activeIndex]?.title}
        </h1>
        <TbExternalLink 
          className="mr-2 pr-2 text-3xl text-black duration-300 hover:text-gray-500 justify-right" 
          onClick={() => {openMultipleURLs(data[activeIndex].urls)}}
        />
      </div>
      <div className="mt-4 h-1 w-full place-self-center bg-black overflow-hidden flex-grow" onClick={openMultipleURLs}></div>
      <div className="h-[70vh]">
        {
          data[activeIndex]?.urls.map((url, index) => (
            <React.Fragment key={index}>
              <div className="flex my-4">
                <h3 className="flex-grow text-md font-medium ml-2 hover:underline text-gray-700 hover:text-black">
                  {url}
                </h3>
                <TbExternalLink 
                  className="mr-2 pr-2 text-3xl hover:text-black duration-300 text-gray-700 justify-right"
                  onClick={() => {window.open(url)}} 
                />
              </div>
              <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-400"></div>
            </React.Fragment>
          ))
        }
      </div>
      <form onSubmit={formSubmit}>
          <div className="flex flex-row">
              <button 
                className="ml-12 mb-4 mr-2 w-[2.5vw] h-[2.5vw] rounded bg-gray-800 text-3xl text-white duration-300 hover:scale-95"
                type="submit"
              >
                  +
              </button>
              <Input
                  type="text"
                  placeholder="+ Add a url"
                  className="w-[70vw] border-black"
              />
          </div>
      </form>
    </div>
  );
};

export default Workspaces;
