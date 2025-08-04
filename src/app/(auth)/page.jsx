"use client";

import Link from "next/link";

import { AppleButton, GoogleButton } from "@/components/auth";
import { LogoIcon } from "@/components/icons";
import { AUTH_NAV_ITEMS } from "@/config/constants";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex lg:flex-1 w-full">
        <div className="hidden lg:flex flex-col w-full justify-center ">
          <LogoIcon className="fill-foreground h-[350px] w-auto p-5" />
        </div>
        <div className="flex mx-auto max-w-[600px] lg:max-w-full lg:w-[85%] lg:mx-0">
          <div className="flex flex-col justify-center w-full p-9 pt-12 lg:p-0">
            <LogoIcon className="lg:hidden fill-foreground w-[35px] h-[35px] " />
            <div className="my-12">
              <span className="text-6xl font-extrabold text-wrap">
                Happening now
              </span>
            </div>
            <div className="mb-8">
              <span className="text-3xl font-extrabold">Join today.</span>
            </div>

            <div className="flex flex-col mb-3.5 mt-6 max-lg:items-center lg:my-0">
              <div className="max-w-72">
                <div className="flex mb-8 h-10">
                  <GoogleButton className="bg-white text-black font-medium rounded-full w-full hover:outline-2 hover:outline-offset-1 hover:outline-blue-400 hover:bg-blue-100" />
                </div>

                <div className="flex h-10">
                  <AppleButton className="bg-white text-black font-medium rounded-full w-full hover:outline-2 hover:outline-offset-1 hover:outline-gray-400 hover:bg-gray-200" />
                </div>

                <div className="flex items-center my-4">
                  <div className="flex-1 border-t border-gray-700" />
                  <span className="px-2 text-sm font-bold">OR</span>
                  <div className="flex-1 border-t border-gray-700" />
                </div>

                <Link
                  href={"/signup"}
                  className="flex items-center justify-center h-10 mb-4 w-full rounded-full bg-blue-500 hover:bg-blue-500/85"
                >
                  <span className="text-white font-bold">Creat account</span>
                </Link>
                <div className="mb-5 text-[11px] text-gray-500">
                  By signing up, you agree to the&nbsp;
                  <Link href="#" className="text-blue-400 hover:underline">
                    Terms of Service
                  </Link>
                  &nbsp; and&nbsp;
                  <Link href="#" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                  , including&nbsp;
                  <Link href="#" className="text-blue-400 hover:underline">
                    Cookie Use.
                  </Link>
                </div>

                <div className="mt-10">
                  <div className="mb-5 font-bold">Already have an account?</div>
                  <Link
                    href={"/login"}
                    className="flex items-center justify-center h-10 mb-4 w-full rounded-full bg-white hover:outline-2 hover:outline-offset-1 hover:outline-blue-300 hover:bg-blue-100"
                  >
                    <span className="text-blue-600 font-bold">Sign In</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <nav className="flex flex-wrap justify-center px-4 py-3 w-full text-[11px]">
          {AUTH_NAV_ITEMS.map(({ label, url }, index) => {
            const isLastItem = index === AUTH_NAV_ITEMS.length - 1;
            return (
              <div
                key={index}
                className="flex items-center justify-center flex-row my-1 pr-2 text-gray-600"
              >
                {!isLastItem ? (
                  <>
                    <Link href={url}>
                      <span className="">{label}</span>
                    </Link>
                    <div className="pl-1">
                      <span>&nbsp;</span>
                      <span>|</span>
                    </div>
                  </>
                ) : (
                  <span className="">{label}</span>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
