"use client";
import { useState } from "react";

export const FloatingInput = ({
  id,
  label,
  type = "text",
  name = "",
  value = "",
  limmit = "",
  showToggle = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showToggle && type === "password"
      ? showPassword ? "text" : "password"
      : type;

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev)
  }
  
  return (
    <div className="relative flex items-center w-full">
      <input
        id={id}
        name={name}
        type={inputType}
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        className={`w-full rounded-sm border-[1px] px-3 pt-[26px] pb-[8px] border-gray-500 focus:ring-1 focus:border-blue-500 focus:ring-blue-500 text-white peer block appearance-none placeholder-transparent outline-none`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute flex items-center left-3 text-sm text-gray-500 transition duration-300 ease-in-out  peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-500 peer-focus:top-[10px] peer-focus:text-[11px] peer-focus:text-blue-500 ${
          internalValue && internalValue.length > 0
            ? "top-[10px] text-[11px]"
            : ""
        }`}
      >
        {label}
      </label>

      {showToggle && type === "password" && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none focus:text-blue-500 transition-colors duration-200"
          tabIndex={-1}
        >
          {showPassword  ? (
            // Eye icon (show)
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 fill-gray-500 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18yzcnr r-yc9v9c"
              style={{ color: "rgb(239, 243, 244)" }}
            >
              <g>
                <path d="M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"></path>
              </g>
            </svg>
          ) : (
            // Eye slash icon (hide)
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 fill-gray-500 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-18yzcnr r-yc9v9c"
              style={{ color: "rgb(239, 243, 244)" }}
            >
              <g>
                <path d="M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z"></path>
              </g>
            </svg>
          )}
        </button>
      )}
    </div>
  );
};
