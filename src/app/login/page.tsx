import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  return (
    <div className="">
      <Link
        href="/"
        className="text-md absolute top-1 text-3xl duration-300 hover:scale-105"
      >
        {" "}
        <IoIosArrowBack />
      </Link>
      <div className="flex h-screen w-screen items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
};

export default Login;
