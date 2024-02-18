"use client"
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

let index = 0;

const Workspaces = ({ data }) => {
  // State to track the active workspace title
  const [activeWorkspaceTitle, setActiveWorkspaceTitle] = useState("No active workspace");

  // Find the active workspace
  const activeWorkspace = data.find(workspace => workspace.active);

  // Update the active workspace title when it changes
  React.useEffect(() => {
    if (activeWorkspace) {
      setActiveWorkspaceTitle(activeWorkspace.title);
    } else {
      setActiveWorkspaceTitle("No active workspace");
    }
  }, [activeWorkspace]);

  return (
    <div className="w-full h-full">
      <h1>Hi! {activeWorkspaceTitle}</h1>
      <hr />
      <Carousel className="flex flex-wrap">
        <CarouselContent>{
          data.map((workspace, index) => (
            <CarouselItem 
              key={index} 
              className={`p-4 m-4 rounded-md bg-gray-300 hover:bg-gray-400 ${workspace.active ? 'bg-black text-white' : ''}`}
            >
              {workspace.title}
            </CarouselItem>
          ))
        }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const WorkspaceUpdateIndex = (index_param) => {
  index = index_param;
};

export default {Workspaces, WorkspaceUpdateIndex};
