import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/modal/Modal";
import { WARNING_OPTIONS } from "@/config/constants";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function WarningImage({
  previewURL,
  settings,
  onChangeSensitive,
}) {
  const [isShowWarning, setIsShowWarning] = useState(true);

  const sensitiveMessage = (sensitiveFlags) => {
    if (!sensitiveFlags || sensitiveFlags.length === 0) return null;

    const formatted = sensitiveFlags.map((item) =>
      item === "sensitive" ? "sensitive content" : item
    );

    let result = "";

    if (formatted.length === 1) {
      result = formatted[0];
    }

    if (formatted.length === 2) {
      result = `${formatted[0]} and ${formatted[1]}`;
    }

    if (formatted.length === 3) {
      const last = formatted.pop();
      result = `${formatted.join(", ")}, and ${last}`;
    }

    return capitalizeFirstLetter(result);
  };

  return (
    <Modal.body className="flex flex-col flex-1">
      <div className="relative flex flex-1 flex-col items-center justify-center bg-white/5 overflow-y-auto">
        <div className="flex items-center justify-center h-full w-full">
          <Image
            src={previewURL}
            alt=""
            width={500}
            height={500}
            className={`w-full object-contain ${
              settings.cropType === "original"
                ? "h-full object-contain"
                : settings.cropType === "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
        {/* Warning Overlay */}
        {settings.sensitiveFlags.length > 0 && (
          <>
            <div
              className="absolute top-2 right-2 px-3 py-1 text-sm font-bold rounded-2xl hover:bg-black backdrop-blur-md hover:text-white cursor-pointer"
              onClick={() => setIsShowWarning(true)}
            >
              Hide
            </div>

            {isShowWarning && (
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[25px] flex items-center justify-center w-full">
                <div className="flex flex-col items-center">
                  <div className="text-lg">🙈</div>
                  <div className="py-2">
                    <h1 className="font-semibold">
                      Content warning:
                      {sensitiveMessage(settings.sensitiveFlags)}
                    </h1>
                    <span className="text-sm">
                      The post author flagged this post as showing sensitive
                      content.
                    </span>
                  </div>
                  <div className="w-full flex justify-end mt-2">
                    <div
                      className="bg-stone-400/60 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer select-none"
                      onClick={() => setIsShowWarning(false)}
                    >
                      Show
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex-shrink-0">
        <div className="px-4 py-3">
          <h2 className="text-xl font-bold">
            Put a content warning on this post
          </h2>
          <span className="text-sm text-gray-600">
            Select a category, and we’ll put a content warning on this post.This
            helps people avoid content they don’t want to see.
          </span>
        </div>
        <div className="flex flex-col">
          {WARNING_OPTIONS.map((option) => (
            <div className="flex p-4" key={option}>
              <label className="flex flex-grow items-center justify-between">
                <span className="text-xl">{capitalizeFirstLetter(option)}</span>
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-500 h-5 w-5"
                  checked={settings.sensitiveFlags.includes(option)}
                  onChange={() => {
                    onChangeSensitive(option);
                    if (!isShowWarning) {
                      setIsShowWarning(true);
                    }
                  }}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </Modal.body>
  );
}
