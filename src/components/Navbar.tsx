import Image from "next/image";
import Logo from "../../public/images/tabsurfer-logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="font flex h-24 w-screen items-center justify-between border-b-2 bg-white">
      <div className="ml-12 cursor-pointer duration-300 hover:scale-105">
        <Image
          src={Logo.src}
          alt="Logo"
          width={1000}
          height={1000}
          className="h-16 w-16 grayscale duration-300 hover:filter-none"
        />
      </div>
      <div>
        <h1 id="title">
          TabSurfer
        </h1>
      </div>
      <div className="flex flex-row">
        <Link
          href="/login"
          className="mr-5 cursor-pointer rounded-md border-2 border-black px-4 py-3 font-bold text-black duration-300 hover:bg-black hover:text-white"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
