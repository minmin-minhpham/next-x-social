import { NAV_ITEMS } from "@/config/constants";
import { InfoMoreIcon, LogoIcon } from "../icons";
import Link from "next/link";
import Image from "next/image";

export default function LeftBar() {
  return (
    <div className="h-screen sticky flex flex-col justify-between top-0 pt-2">
      {/* MENU */}
      <div className="flex flex-col gap-4 text-lg items-center xl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-neutral-800">
          <LogoIcon className="fill-white h-7 w-7" />
        </Link>
        <nav className="flex flex-col gap-1.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex items-center gap-4 p-3 rounded-full hover:bg-neutral-800"
            >
              <item.icon className="fill-white h-7 w-7" />
              <span className="hidden xl:inline">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* <Link
          href={"/login"}
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          login!
        </Link> */}
      </div>

      {/* USER */}
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center p-3 gap-2">
          <div className="relative rounded-full overflow-hidden h-10 w-10">
            <Image src="/avatar.jpg" alt="Min Min" width={100} height={100} />
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="font-bold">Min Min</span>
            <span className="text-sm text-gray-600">@MinWebDev</span>
          </div>
        </div>
        <div className="hidden xl:block cursor-pointer font-bold">
          <InfoMoreIcon className="fill-current" />
        </div>
      </div>
    </div>
  );
}
