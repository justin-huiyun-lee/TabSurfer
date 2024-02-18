"use client"
import React, { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";
import Navbar from "@/components/Navbar";
import Workspaces from "@/components/Workspaces";
import Logo from "../../public/images/tabsurfer-logo.png";
import Head from "next/head";
import { Input } from "../components/ui/input";
import { BsSearch } from "react-icons/bs";
import { Skeleton } from "../components/ui/skeleton";
import { UserButton } from "@clerk/nextjs";
import { FaRegTrashCan } from "react-icons/fa6";

const initialData = [
  {
    title: "Math",
    urls: ["https://www.khanacademy.org/math", "https://google.com"],
    active: true,
  },
  {
    title: "Science",
    urls: ["https://www.khanacademy.org/science"],
    active: false,
  },
  {
    title: "Computer Science",
    urls: ["https://www.khanacademy.org/computing"],
    active: false,
  },
  {
    title: "Arts and Humanities",
    urls: ["https://www.khanacademy.org/humanities"],
    active: false,
  },
];

export default function Home() {
  const [data, setData] = useState(initialData);
  const [selectedItem, setSelectedItem] = useState(0);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const foundIndex = data.findIndex((workspace) => workspace.active);
    setSelectedItem(foundIndex !== -1 ? foundIndex : 0);
  }, [data]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    const newData = data.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setData(newData);
    Workspaces(data, index);
    
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  function openMultipleURLs(urls) {
    urls.reverse().forEach(function (url) {
      window.open(url);
    });
  }

  function deleteElement(index) {
    const updatedData = [...data];
    updatedData[selectedItem].urls.splice(index, 1);
    setData(updatedData);
  }

  function formSubmit(e) {
  e.preventDefault();
  let tempUrl = url;
  if (!url.startsWith("https://www.")) {
    tempUrl = "https://www." + url;
  }
  const newData = [...data];
  newData[selectedItem].urls.push(tempUrl);
  
  setData(newData);
  setUrl("");
  e.value = "";
  console.log(newData[selectedItem].urls);
  document.getElementById("formStuff").value = "";
}

  function getDisplayURL(url) {
    if (url.startsWith("https://www.")) {
      return url.substring(12);
    } else if (url.length > 50) {
      return url.substring(0, 50) + "...";
    } else {
      return url;
    }
  }

  function addCategory(e) {
    e.preventDefault();
    
    const newWorkspace = {
      title: e.target.elements.addCategory.value,
      urls: [],
      active: false,
    };
    const newData = [...data, newWorkspace];
    document.getElementById("addCategory").value = "";
    setData(newData);
    Workspaces(data);
  }

  return (
    <>
      <Head>
        <title>TabSurfer</title>
      </Head>
      <div>
        <Navbar />
        <div className="flex">
          {/* Sidebar */}
          <div className="flex h-screen w-1/4 flex-col justify-between border-r-2 bg-[#ededed] p-4">
            <div className="flex flex-col">
              <div className="flex items-center">
                <Input placeholder="Search" />
                <BsSearch className="ml-3 cursor-pointer text-2xl duration-300 hover:scale-90" />
              </div>
              <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-300"></div>
              <div className="mt-4 flex flex-col align-top">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-2 flex cursor-pointer items-center justify-between rounded-md py-2 pl-4 font-medium text-black duration-150 hover:bg-gray-900 hover:text-white ${index === selectedItem ? "bg-gray-800 text-gray-50 hover:bg-gray-700 hover:text-white" : "bg-gray-50"}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.title}
                    <TbExternalLink
                      className={`justify-right mr-2 pr-2 text-3xl text-black duration-300 hover:text-gray-500 ${index === selectedItem ? "text-white" : ""}`}
                      onClick={() => {
                        openMultipleURLs(data[index].urls);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-24">
              <form onSubmit={addCategory}>
                <div className="flex flex-row">
                  <button
                    className="mb-4 mr-2 w-[2.5vw] rounded bg-gray-800 text-3xl text-white duration-300 hover:scale-95"
                    type="submit"
                  >
                    +
                  </button>
                  <Input
                    type="text"
                    id="addCategory"
                    placeholder="+ Add a workspace"
                    className="mb-4 w-[15vw] border-black"
                  />
                </div>
              </form>
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
          {/* Workspaces */}
          <div className="-mt-4 flex h-full w-full scale-90 flex-col rounded-2xl border px-4 shadow-lg">
            <div className="mt-4 flex justify-between">
              <h1 className="ml-2 flex-grow p-4 text-3xl font-medium">
                {data[selectedItem]?.title}
              </h1>
              <TbExternalLink
                className="mr-2 pr-2 text-3xl text-black duration-300 hover:text-gray-500"
                onClick={() => {
                  openMultipleURLs(data[selectedItem].urls);
                }}
              />
            </div>
            <div
              className="mt-4 h-1 w-full flex-grow place-self-center overflow-hidden bg-black"
              onClick={openMultipleURLs}
            ></div>
            <div className="h-[70vh]">
              {data[selectedItem]?.urls.map((url, index) => (
                <React.Fragment key={index}>
                  <div className="my-4 flex">
                    <h3 className="text-md ml-2 flex-grow font-medium text-gray-700 hover:text-black hover:underline">
                      {getDisplayURL(url)}
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
                        handleUrlChange(e);
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
                  id="formStuff"
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
        </div>
      </div>
    </>
  );
}
