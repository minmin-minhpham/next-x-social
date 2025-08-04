import Link from "next/link";
import { FloatingInput } from "@/components/ui/input/FloatingInput";
import { AppleButton, GoogleButton } from ".";

const initialState = { step: "LoginEmail", email: "", error: "" };

export default function LoginForm() {
  return (
    // <Modal.body className="flex flex-col flex-1">
    <form>
      {/* STEP 1: CHECK_EMAIL */}
      <div className="flex flex-col mx-auto px-8 pb-12 min-w-[364px] max-w-[364px]">
        <div className="my-5">
          <h1 className="text-3xl font-extrabold">Sign in to X</h1>
        </div>

        <div className="flex my-3 h-10">
          <GoogleButton className="bg-white text-black font-medium rounded-full w-full hover:outline-2 hover:outline-offset-1 hover:outline-blue-400 hover:bg-blue-100" />
        </div>

        <div className="flex my-3 h-10">
          <AppleButton className="bg-white text-black font-medium rounded-full w-full hover:outline-2 hover:outline-offset-1 hover:outline-gray-400 hover:bg-gray-200" />
        </div>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-700" />
          <span className="px-2 text-sm font-bold">OR</span>
          <div className="flex-1 border-t border-gray-700" />
        </div>

        <div className="my-3">
          <FloatingInput id="email" label="Email" type="email" />
        </div>

        <div className="my-3">
          <button className="bg-white h-10 w-full rounded-full hover:outline-2 hover:outline-offset-1 hover:outline-gray-400 hover:bg-gray-200">
            <span className="text-black font-bold ">Next</span>
          </button>
        </div>

        <div className="my-3">
          <button className="border-[1px] border-border-gray h-10 mb-4 w-full rounded-full hover:outline-2 hover:outline-offset-1 hover:outline-border-gray hover:bg-white/10">
            <span className="text-inherit font-bold">Forgot password?</span>
          </button>
        </div>

        <div className="mt-10">
          <p className="text-gray-500">
            Don't have an account?&nbsp;
            <Link href="#" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* STEP 2: LOGIN */}
      {/* <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-col px-20">
          <div className="my-5">
            <h1 className="text-3xl font-extrabold">Enter your password</h1>
          </div>
          <div>
            <div className="py-3">
              <FloatingInput id="name" label="Name" type="name" />
            </div>
            <div className="py-3">
              <FloatingInput
                id="password"
                label="Password"
                type="password"
                showToggle={true}
              />
              <div className="px-2">
                <Link href="#" className="text-blue-500 hover:underline">
                  <span className="text-sm">Forgot password?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-20">
        <div className="flex flex-wrap justify-center w-full my-6">
          <button className="bg-neutral-400/75 h-10 w-full rounded-full">
            <span className="text-black font-bold">Next</span>
          </button>
        </div>
        <div className="mb-6">
          <p className="text-gray-500">
            Don't have an account?&nbsp;
            <Link href="#" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div> */}
    </form>
    // </Modal.body>
  );
}
