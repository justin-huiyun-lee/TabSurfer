import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const Register = () => {
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
        <SignUp />
      </div>
    </div>
  );
};

export default Register;
