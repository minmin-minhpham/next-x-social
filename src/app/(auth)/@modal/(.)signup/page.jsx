"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/ui/modal/Modal";
import { GifIcon, LogoIcon } from "@/components/icons";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { useState } from "react";
import DateSelect from "@/components/ui/DateSelect";

export default function SignUpModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  // 👇 Fake SIGNUP
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
        <Modal.body className="flex flex-col items-center w-full h-full">
          <div className="flex flex-col flex-1 w-full">
            <div className="flex flex-col mx-auto px-20">
              <div className="my-5">
                <h1 className="text-3xl font-extrabold">Create your account</h1>
              </div>
              <div>
                <div className="py-3">
                  <FloatingInput id="name" label="Name" type="name" />
                </div>
                <div className="py-3">
                  <FloatingInput id="email" label="Email" type="email" />
                </div>

                <div className="flex flex-col mt-5">
                  <div className="mb-2">
                    <span className="font-bold">Date of birth</span>
                  </div>

                  <div className="mb-1">
                    <p className="text-gray-500 text-sm">
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </p>
                  </div>

                  <div className="my-4">
                    {/* <DateOfBirthSelect /> */}
                    <DateSelect />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-wrap justify-center w-full px-20 my-6">
              <button className="bg-neutral-400/75 h-10 w-full rounded-full">
                <span className="text-black font-bold">Next</span>
              </button>
            </div>
          </div>
        </Modal.body>
      </Modal.content>
    </Modal>
  );
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

const DateOfBirthSelect = ({ onChange }) => {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (field, value) => {
    const updated = { month, day, year, [field]: value };
    setMonth(updated.month);
    setDay(updated.day);
    setYear(updated.year);

    if (onChange) onChange(updated);
  };

  return (
    <div className="flex gap-3 w-full">
      <select
        value={month}
        onChange={(e) => handleChange("month", e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Month</option>
        {months.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        value={day}
        onChange={(e) => handleChange("day", e.target.value)}
        className="w-1/3 border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Day</option>
        {days.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={year}
        onChange={(e) => handleChange("year", e.target.value)}
        className="w-1/3 border border-gray-300 rounded px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        <option value="">Year</option>
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
};
