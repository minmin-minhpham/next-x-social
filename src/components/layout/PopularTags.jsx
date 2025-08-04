import Image from "next/image";
import Link from "next/link";
import { InfoMoreIcon } from "../icons";

export default function PopularTags() {
  return (
    <div className="border-[1px] border-border-gray rounded-2xl">
      <section className="flex flex-col">
        <div className="py-3 px-4">
          <span className="text-xl font-bold text-inherit">
            What’s happening
          </span>
        </div>

        {/* TREND EVEN */}
        <div className="flex px-4 py-3 hover:bg-neutral-950 cursor-pointer">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden">
            <Image src="/avatar.jpg" alt="Min Min" width={100} height={100} />
          </div>
          <div className="flex-1 ml-5">
            <h2 className="text font-bold">From the Desk of Anthony</h2>
            <span className="text-sm text-gray-600">LIVE</span>
          </div>
        </div>

        {/* TOPICS */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-neutral-950 cursor-pointer"
          >
            <div className="text-gray-600">
              <div className="flex items-center justify-between">
                <span className="text-sm">Business & finance • Trending</span>
                <InfoMoreIcon className="fill-current" />
              </div>
              <h1 className="text-foreground font-bold">OpenAI</h1>
              <span className="text-sm">20K posts</span>
            </div>
          </div>
        ))}

        <div className="px-4 py-3 text-right">
          <Link href="/" className="text-blue-400 hover:text-blue-600">
            Show More
          </Link>
        </div>
      </section>
    </div>
  );
}
