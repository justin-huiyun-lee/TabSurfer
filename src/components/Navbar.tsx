import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      </div>
      <div>
        <h1>TabSurfer</h1>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
