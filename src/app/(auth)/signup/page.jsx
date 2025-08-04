"use client";

import { LogoIcon } from "@/components/icons";
import Modal from "@/components/ui/modal/Modal";
import { wait } from "@/lib/wait";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const SignUpForm = dynamic(
  async () => {
    await wait(1000);
    return import("@/components/auth/SignUpForm");
  },
  {
    srr: false,
  }
);

export default function SignUpPage() {
  const router = useRouter();

  const handleCloseModal = () => {
    router.replace("/");
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

  // return (
  //   <>
  //     <Modal.header className="flex items-center">
  //       <div className="flex items-center h-14 px-4">
  //         <div className="flex-1">
  //           <button
  //             className="w-8 h-8 rounded-full hover:bg-neutral-800"
  //             // onClick={closeModal}
  //           >
  //             X
  //           </button>
  //         </div>
  //         <div className="flex flex-1 justify-center">
  //           <LogoIcon className="fill-foreground w-auto h-12" />
  //         </div>
  //         <div className="flex-1" />
  //       </div>
  //     </Modal.header>
  //     <Modal.body className="flex flex-col items-center w-full h-full">
  //       <div className="flex flex-col flex-1 w-full">
  //         <div className="flex flex-col mx-auto px-20">
  //           <div className="my-5">
  //             <h1 className="text-3xl font-extrabold">Create your account</h1>
  //           </div>
  //           <div>
  //             <div className="py-3">
  //               <FloatingInput id="name" label="Name" type="name" />
  //             </div>
  //             <div className="py-3">
  //               <FloatingInput id="email" label="Email" type="email" />
  //             </div>

  //             <div className="flex flex-col mt-5">
  //               <div className="mb-2">
  //                 <span className="font-bold">Date of birth</span>
  //               </div>

  //               <div className="mb-1">
  //                 <p className="text-gray-500 text-sm">
  //                   This will not be shown publicly. Confirm your own age, even
  //                   if this account is for a business, a pet, or something else.
  //                 </p>
  //               </div>

  //               <div className="my-4">
  //                 {/* <DateOfBirthSelect /> */}
  //                 <DateSelect />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex w-full">
  //         <div className="flex flex-wrap justify-center w-full px-20 my-6">
  //           <button className="bg-neutral-400/75 h-10 w-full rounded-full">
  //             <span className="text-black font-bold">Next</span>
  //           </button>
  //         </div>
  //       </div>
  //     </Modal.body>
  //   </>
  // );
}

// DATE SELECT
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);
