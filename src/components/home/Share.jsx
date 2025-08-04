"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import Avatar from "./Avatar";
import Toolbar from "./Toolbar";
import MediaPreview from "./preview/MediaPreview";

export default function Share() {
  const fileInputRef = useRef(null);
  const [hasContent, setHasContent] = useState(false);
  const [postText, setPostText] = useState([]);
  const [mediaList, setMediaList] = useState([]);

  const maxChars = 500;
  const remainingChars = maxChars - postText.length;

  const handleContentChange = (e) => {
    const htmlContent = e.target.innerHTML;
    const isEmpty =
      !htmlContent.trim() ||
      htmlContent === "<br>" ||
      htmlContent === "<div><br></div>";
    const text = e.target.textContent
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .trim();

    setHasContent(!isEmpty);
    setPostText(text);
  };

  const handleMediaChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const newMediaList = files.map((file, index) => ({
      id: Date.now() + index,
      file,
    }));

    setMediaList((prev) => [...prev, ...newMediaList]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleMediaListChange = (newMediaList) => {
    setMediaList(newMediaList)
  }

  return (
    <form className="flex p-4 gap-3">
      <Avatar src="/avatar.jpg" alt="Min Min" />

      <div className="flex flex-col flex-1 gap-4 min-w-0">
        <div className="relative">
          <div
            className="w-full text-xl outline-none max-h-[650px] pt-2 pb-2 relative z-10 bg-transparent overflow-y-auto resize-none"
            style={{
              wordBreak: "break-word",
              whiteSpace: "pre-wrap",
              scrollbarWidth: "thin",
              scrollbarColor: "#2f3336 transparent",
            }}
            contentEditable="true"
            onInput={handleContentChange}
          />

          {!hasContent && (
            <div
              className="absolute top-2 left-0 text-xl text-gray-500 pointer-events-none select-none"
              style={{ zIndex: 1 }}
            >
              What's happening?
            </div>
          )}

          {remainingChars < 0 && (
            <div className="relative bg-[rgb(2,17,61)] rounded-xl">
              <div className="flex flex-col gap-2 px-4 py-3">
                <span className="text-sm">
                  Upgrade to Premium+ to write longer posts and Articles.
                </span>
                <Link
                  href="/"
                  className="text-sm font-bold underline hover:decoration-2 w-fit"
                >
                  Upgrade to Premium+
                </Link>
              </div>
            </div>
          )}

          <MediaPreview mediaList={mediaList} onMediaListChange={handleMediaListChange} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <hr className="flex border-[1px] border-border-gray w-full" />
          <Toolbar
            onMediaChange={handleMediaChange}
            fileInputRef={fileInputRef}
          />
          <div className="flex items-center justify-center">
            {postText.length > 0 && (
              <div className="flex items-center justify-center">
                <div className="relative w-7 h-7">
                  <div className="w-full h-full">
                    <svg
                      className="w-7 h-7 transform -rotate-90"
                      viewBox="0 0 32 32"
                    >
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="#2f3336"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke={
                          remainingChars < 20
                            ? remainingChars < 0
                              ? "#fb2c36"
                              : "#fdc700"
                            : "#3b82f6"
                        }
                        strokeWidth="2"
                        strokeDasharray={`${
                          ((maxChars - remainingChars) / maxChars) * 88
                        } 88`}
                      />
                    </svg>
                  </div>
                  {remainingChars < 20 && (
                    <div className="absolute flex items-center justify-center inset-0">
                      <span
                        className={`text-sm ${
                          remainingChars < 0
                            ? "text-red-500"
                            : "text-yellow-400"
                        }`}
                      >
                        {remainingChars}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            <button
              className={`flex bg-white text-black font-bold rounded-2xl px-4 py-1 text-md ml-2 ${
                remainingChars < 0 || postText.length === 0 ? "opacity-50" : ""
              }`}
              disabled={postText.length === 0 || remainingChars < 0}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
