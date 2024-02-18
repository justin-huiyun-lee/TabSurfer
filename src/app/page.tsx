import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Workspaces from "@/components/Workspaces";
import Logo from "../../public/images/tabsurfer-logo.png";
import Head from "next/head";

let active = "Math";

let data = [
  {
    title: "Math",
    urls: ["https://www.khanacademy.org/math"],
    active: true,
  },
  {
    title: "Science",
    urls: ["https://www.khanacademy.org/science"],
    active: false,
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
  return (
    <>
      <Head>
        <title>TabSurfer</title>
      </Head>
      <div>
        <Navbar />
        <Sidebar data={data} active={active} />
        <Workspaces data={data} />
      </div>
    </>
  );
}
