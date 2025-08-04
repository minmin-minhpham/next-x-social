import Modal from "@/components/ui/modal/Modal";
import Image from "next/image";

export default function CropImage({ previewURL, cropType, onChangeCropType }) {
  return (
    <Modal.body className="flex flex-col flex-1">
      <div className="flex flex-1 flex-col items-center justify-center bg-white/5 overflow-y-auto">
        <div className="max-w-[500px] w-[85%] border-4 border-blue-500 max-h-[95%]">
          {/* <div className="max-w-[500px] w-[85%] border-4 border-blue-500 max-h-[700px] h-[95%]">   */}
          <Image
            src={previewURL}
            alt=""
            width={500}
            height={500}
            className={`w-full ${
              cropType === "original"
                ? "h-full object-contain"
                : cropType === "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
      </div>

      <div className="flex items-center gap-8 py-4">
        <div className="flex items-center justify-between gap-8">
          <div
            className="flex items-center gap-2 px-4 cursor-pointer"
            onClick={() => onChangeCropType("original")}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  cropType === "original" ? "fill-indigo-700" : "fill-[#e7e9ea]"
                }
                d="M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
          </div>

          <div
            className="flex items-center gap-2 px-4 cursor-pointer"
            onClick={() => onChangeCropType("wide")}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  cropType === "wide" ? "fill-indigo-700" : "fill-[#e7e9ea]"
                }
                d="M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
          </div>

          <div
            className="flex items-center gap-2 px-4 cursor-pointer"
            onClick={() => onChangeCropType("square")}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                className={
                  cropType === "square" ? "fill-indigo-700" : "fill-[#e7e9ea]"
                }
                d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Modal.body>
  );
}
