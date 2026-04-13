import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="mr-[25%]">
      <div className = "h-screen flex items-center justify-center bg-[#A5AE9E]">

          <div className = "flex flex-col items-center gap-11">
            
            <h1 className = "text-8xl font-serif text-[#313628]">
              Ishanvi Upare 
            </h1>

            <img src = "_3.jpg" className = "w-155 h-155"/>
          </div>

      </div>
    </div>
  );
};
