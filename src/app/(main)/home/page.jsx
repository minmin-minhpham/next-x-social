"use client";

import Post from "@/components/home/Post";
import Share from "@/components/home/Share";
import Link from "next/link";

// export const metadata = {
//   title: "Home",
// };

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-30 flex  border-b-[1px] border-border-gray text-gray-600 bg-black/90 backdrop-blur-md ">
        <Link href="" className="flex flex-col grow-1 items-center px-4">
          <div className="flex items-center h-[53px] transition-colors relative">
            <span className="font-bold text-foreground">For you</span>
            <div className="absolute bottom-0 w-full h-1 bg-blue-500" />
          </div>
        </Link>

        <Link href="" className="flex flex-col grow-1 items-center px-4">
          <div className="flex items-center h-[53px] transition-colors relative">
            <span className="font-bold">Following</span>
            {/* <div className="absolute bottom-0 w-full h-1 bg-blue-500" /> */}
            <div />
          </div>
        </Link>
      </div>

      <Share />
      <div className="pb-16">
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
