import { Input } from "./ui/input";
import { BsSearch } from "react-icons/bs";
import { Skeleton } from "./ui/skeleton";

const Sidebar = () => {
  return (
    <div className="flex h-screen w-1/4 flex-col justify-between border-r-2 bg-[#ededed] p-4">
      <div className="flex flex-col">
        <div className="mt-24 flex items-center">
          <Input placeholder="Search" />
          <BsSearch className="ml-3 text-2xl duration-300 hover:scale-95" />
        </div>
        <div className="mt-4 h-1 w-full place-self-center rounded-full bg-gray-300"></div>
      </div>
      <div>
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
