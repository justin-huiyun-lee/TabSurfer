import Image from "next/image";
import Logo from "../../public/images/tabsurfer-logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="font flex h-24 w-screen items-center justify-between border-b-2 bg-white">
      <div className="ml-12 cursor-pointer duration-300 hover:rotate-6 hover:scale-95">
        <Image
          src={Logo.src}
          alt="Logo"
          width={1000}
          height={1000}
          className="h-16 w-16"
        />
      </div>
      <div>
        <h1 className="cursor-pointer text-3xl font-light duration-300 hover:scale-105">
          TabSurfer
        </h1>
      </div>
      <div className="mr-12 cursor-pointer rounded-md bg-black px-4 py-3 font-bold text-white duration-300 hover:scale-105">
        <Link href="/login" className="">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
