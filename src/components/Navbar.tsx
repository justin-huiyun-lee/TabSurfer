import Image from "next/image";
import Logo from "../../public/images/tabsurfer-logo.png";

const Navbar = () => {
  return (
    <div className="font flex h-24 w-screen items-center justify-between border-b-2 bg-white">
      <div className="pl-12">
        <Image src={Logo.src} alt="Logo" width={80} height={80} />
      </div>
      <div>
        <h1 id="title">TabSurfer</h1>
      </div>
      <div className="pr-12">
        <button class="cssbuttons-io">
          <span>
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              fill="currentColor"
            ></path>
            Login
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
