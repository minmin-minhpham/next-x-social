import { useState } from "react";

import { MONTHS } from "@/config/constants";

const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];

export default function DateSelect() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getDaysInMonth = (month, year) => {
    const m = parseInt(month);
    const y = parseInt(year);

    if (!m || m < 1 || m > 12) return 31;

    if (!y) {
      if (m === 2) return 29;
      if (MONTHS_WITH_30_DAYS.includes(m)) return 30;

      return 31;
    }

    return new Date(y, m, 0).getDate();
  };

  const getSelectableYears = (month, day) => {
    const d = parseInt(day);
    const m = parseInt(month);

    const currentYear = new Date().getFullYear();

    return Array.from({ length: 120 }, (_, i) => {
      const year = currentYear - i;

      if (d === 29 && m === 2 && !isLeapYear(year)) return null;
      
      return { label: String(year), value: String(year) };
    }).filter(Boolean);
  };

  const days = Array.from(
    { length: getDaysInMonth(selectedMonth, selectedYear) },
    (_, i) => ({ label: i + 1, value: i + 1 })
  );

  const years = getSelectableYears(selectedMonth, selectedDay);

  return (
    <>
      <div className="flex grow-[2] w-full">
        {/* MONTHS */}
        <div className="relative group flex flex-col grow-2 border-[1px] mr-3 border-gray-500 rounded-sm focus-within:ring-1 focus-within:border-blue-500 focus-within:ring-blue-500">
          <label className="absolute px-2" htmlFor="month">
            <span className="text-sm text-gray-500 group-focus-within:text-blue-500">
              Months
            </span>
          </label>
          <select
            name="mouth"
            id="mouth"
            className="appearance-none px-2 pt-3 pb-2 mt-4 w-full text-base  bg-black rounded-b-sm text-foreground cursor-pointer transition-all focus:outline-none focus:ring-0 focus:border-transparent"
            onChange={(e) => {
              setSelectedMonth(e.target.value);

              const maxDays = getDaysInMonth(e.target.value, selectedYear);
              if (selectedDay && parseInt(selectedDay) > maxDays) {
                setSelectedDay("");
              }
            }}
            value={selectedMonth}
          >
            <option value="" disabled />
            {MONTHS.map((month) => (
              <option key={month.value} value={month.value} className="">
                {month.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="fill-gray-500 w-5 absolute right-3 top-1/2 transform group-focus-within:fill-blue-500 pointer-events-none"
          >
            <g>
              <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
            </g>
          </svg>
        </div>

        {/* Day */}
        <div className="relative group flex flex-col grow-1 border-[1px] mr-3 border-gray-500 rounded-sm focus-within:ring-1 focus-within:border-blue-500 focus-within:ring-blue-500">
          <label className="absolute px-2" htmlFor="day">
            <span className="text-sm text-gray-500 group-focus-within:text-blue-500">
              Day
            </span>
          </label>
          <select
            name="day"
            id="day"
            className="appearance-none px-2 pt-3 pb-2 mt-4 w-full text-base  bg-black rounded-b-sm text-foreground cursor-pointer transition-all focus:outline-none focus:ring-0 focus:border-transparent"
            onChange={(e) => setSelectedDay(e.target.value)}
            value={selectedDay}
          >
            <option value="" disabled />
            {days.map((day) => (
              <option key={day.value} value={day.value} className="">
                {day.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="fill-gray-500 w-5 absolute right-3 top-1/2 transform group-focus-within:fill-blue-500 pointer-events-none"
          >
            <g>
              <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
            </g>
          </svg>
        </div>

        {/* Year */}
        <div className="relative group flex flex-col grow-1 border-[1px] border-gray-500 rounded-sm focus-within:ring-1 focus-within:border-blue-500 focus-within:ring-blue-500">
          <label className="absolute px-2" htmlFor="year">
            <span className="text-sm text-gray-500 group-focus-within:text-blue-500">
              Year
            </span>
          </label>
          <select
            name="year"
            id="year"
            className="appearance-none px-2 pt-3 pb-2 mt-4 w-full text-base  bg-black rounded-b-sm text-foreground cursor-pointer transition-all focus:outline-none focus:ring-0 focus:border-transparent"
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
          >
            <option value="" disabled />
            {years.map((year) => (
              <option key={year.value} value={year.value} className="">
                {year.label}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="fill-gray-500 w-5 absolute right-3 top-1/2 transform group-focus-within:fill-blue-500 pointer-events-none"
          >
            <g>
              <path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
