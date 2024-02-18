"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

let index_local = 0;

const Workspaces = ({ data, index }) => {
  index_local = index;
  // State to track the active workspace title
  const [activeWorkspaceTitle, setActiveWorkspaceTitle] = useState(
    "No active workspace",
  );

  // Find the active workspace
  const activeWorkspace = data.find((workspace) => workspace.active);

  // Update the active workspace title when it changes
  React.useEffect(() => {
    if (activeWorkspace) {
      setActiveWorkspaceTitle(activeWorkspace.title);
    } else {
      setActiveWorkspaceTitle("No active workspace");
    }
  }, [activeWorkspace]);

  return (
    <div className="h-full w-full">
      <h1>Hi! {activeWorkspaceTitle}</h1>
      <hr />
      <Carousel className="flex flex-wrap">
        <CarouselContent>
          {data.map((workspace, index_local: number) => (
            <CarouselItem
              key={index_local}
              className={`m-4 rounded-md bg-gray-300 p-4 hover:bg-gray-400 ${workspace.active ? "bg-black text-white" : ""}`}
            >
              {workspace.title}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Workspaces;
