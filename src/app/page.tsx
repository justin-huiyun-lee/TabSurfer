"use client";
import { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Workspaces from "@/components/Workspaces";
import Logo from "../../public/images/tabsurfer-logo.png";
import Head from "next/head";
import { Input } from "../components/ui/input";
import { BsSearch } from "react-icons/bs";
import { Skeleton } from "../components/ui/skeleton";
import { UserButton } from "@clerk/nextjs";

let active = "Math";

let data = [
  {
    title: "Math",
    urls: ["https://www.khanacademy.org/math", "https://google.com"],
    active: false,
  },
  {
    title: "Science",
    urls: ["https://www.khanacademy.org/science"],
    active: true,
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
  /* Workspace Code */
  const [activeIndex, setActiveIndex] = useState(0);

  // Find the active workspace and update the index
  useEffect(() => {
    const foundIndex = data.findIndex((workspace) => workspace.active);
    setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
  }, [data]);

  /* Sidebar Code */
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
    <>
      <Head>
        <title>TabSurfer</title>
      </Head>
      <div>
        <Navbar />
        <div className="flex">
          {/***********************************************
           ***************** Sidebar *********************
           ***********************************************/}
          <Sidebar data={data} />
          {/***********************************************
           ***************** Workspaces *********************
           ***********************************************/}
          <Workspaces data={data} />
        </div>
      </div>
    </>
  );
}
