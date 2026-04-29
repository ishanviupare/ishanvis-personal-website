import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

      <div className = "min-h-screen flex items-center justify-center bg-[#A5AE9E] px-6">

          <div className = "flex flex-col items-center text-center gap-11">
            
            <h1 className = "text-6xl sm:text-8xl font-serif text-[#313628]">
              Ishanvi Upare 
            </h1>

            <img src = "home.gif" className = "w-full object-cover aspect-square max-w-150"/>
          </div>

      </div>
  );
};
