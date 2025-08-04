import Image from "next/image";
import Link from "next/link";

export default function Recommendations() {
  return (
    <div className="border-[1px] border-border-gray rounded-2xl">
      <div className="flex flex-col">
        <span className="py-3 px-4 text-xl font-bold text-inherit">
          Who to follow
        </span>

        {/* LIST USER INFO CARD */}
        {[...Array(3)].map((_, index) =>(
          <div key={index} className="px-4 py-3 hover:bg-neutral-950 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="rounded-full overflow-hidden w-10 h-10">
                  <Image
                    src="/avatar.jpg"
                    alt="Min Min"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="font-bold">Min Min</h1>
                  <span className="text-sm text-gray-600">@MinMin</span>
                </div>
              </div>
              <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
                Follow
              </button>
            </div>
          </div>
        ))}


        <div className="px-4 py-3 text-right">
          <Link href="/" className="text-blue-400 hover:text-blue-600">
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}
