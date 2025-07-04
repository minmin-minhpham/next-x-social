"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppleButton, GoogleButton } from "@/components/auth";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { LogoIcon } from "@/components/icons";
import Modal from "@/components/ui/modal/Modal";

export default function LoginModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // Trở về /welcome
  };

  // 👇 Fake LOGIN
  const handleLogin = () => {}

  return (
    <Modal openModal={true} className="inset-0">
      <Modal.backdrop className="bg-backdrop" show={true} />

      <Modal.content className="flex flex-col rounded-2xl bg-black min-h-[400px] min-w-[600px] max-h[90vh] max-w-[80vh] h-[650px] w-[600px]">
        <Modal.header className="flex items-center">
          <div className="flex items-center h-14 px-4">
            <div className="flex-1">
              <button
                className="w-8 h-8 rounded-full hover:bg-neutral-800"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="flex flex-1 justify-center">
              <LogoIcon className="fill-foreground w-auto h-12" />
            </div>
            <div className="flex-1" />
          </div>
        </Modal.header>
        <Modal.body className="flex flex-col flex-1">
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
        </Modal.body>
      </Modal.content>
    </Modal>
  );
}

// export default function LoginModal() {
//   return <div className="text-red-500">THIS IS MODAL</div>
// }
