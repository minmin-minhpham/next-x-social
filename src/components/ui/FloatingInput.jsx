
import { useState } from "react";

export const FloatingInput = ({ id, label, type = "text", value = "", limmit = "", ...props }) => {
  const [internalValue, setInternalValue] = useState(value);

  return (
    <div className="relative flex items-center w-full">
      <input
        id={id}
        type={type}
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        className={`w-full rounded-sm border-[1px] px-3 pt-[26px] pb-[8px] border-gray-500 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 text-white peer block appearance-none placeholder-transparent outline-none`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute flex items-center left-3 text-sm text-gray-500 transition duration-300 ease-in-out  peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-500 peer-focus:top-[10px] peer-focus:text-[11px] peer-focus:text-blue-500 ${
          internalValue && internalValue.length > 0 ? "top-[10px] text-[11px]" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};
