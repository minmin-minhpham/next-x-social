"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import Modal from "@/components/ui/modal/Modal";
import { wait } from "@/lib/wait";
import { LogoIcon } from "@/components/icons";

const SignUpForm = dynamic(
  async () => {
    await wait(1000);
    return import("@/components/auth/SignUpForm");
  },
  {
    srr: false,
  }
);

export default function LoginModal() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <Modal openModal={true} className="inset-0">
      <Modal.backdrop className="bg-backdrop" show={true} />
      <Modal.content className="flex flex-col rounded-2xl bg-black min-h-[400px] min-w-[600px] max-h[90vh] max-w-[80vh] h-[650px] w-[600px]">
        <Modal.header className="flex items-center">
          <div className="flex items-center h-14 px-4">
            <div className="flex-1">
              <button
                className="w-8 h-8 rounded-full hover:bg-neutral-800"
                onClick={handleCloseModal}
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
          <SignUpForm />
        </Modal.body>
      </Modal.content>
    </Modal>
  );
}
