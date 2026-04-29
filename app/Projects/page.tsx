import BlogIndex from "@/components/BlogIndex";
import { getListOfPosts } from "@/helpers/postHelpers";
import "../globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Projects! 𓍢ִ໋❀",
}

export default function Home() {
  const posts = getListOfPosts();
  console.log(posts);

  return (
      <div className="min-h-screen p-2 lg:p-20 bg-[#c6b0ad] font-serif text-[#5a4a46]">
          
        <h1 className = "p-5 text-5xl lg:text-6xl mb-16"> Projects... </h1>

          {/*<div className = "text-xl space-y-7 py-16">
            <p>Welcome to my projects page!</p>
            </div>*/}

        <BlogIndex posts={posts} />

      </div>
  );
}
