import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className = "h-screen w-screen flex bg-[#313628]">

      <div className = "flex h-full w-full">

        <div className = "w-3/4 bg-[#A5AE9E] flex flex-col items-center justify-center gap-11">
          <h1 className = "text-8xl font-serif text-[#313628]">
            Ishanvi Upare 
          </h1>

          <img src = "_3.jpg" className = "w-155 h-155"/>
        </div>

        <div className = "w-1/4 bg-[#313628] flex flex-col p-20 pl-22">
          <div className = "flex flex-col gap-15 text-5xl font-serif text-[#A5AE9E]">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>

      </div>
    </div>
  );
};
