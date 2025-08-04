import Modal from "@/components/ui/modal/Modal";
import Image from "next/image";

export default function DescriptionImage({
  previewURL,
  settings,
  altText,
  onChangeAlt,
}) {
  const maxLength = 1000;

  return (
    <Modal.body className="flex flex-col flex-1">
      <div className="flex flex-1 flex-col items-center justify-center bg-white/5 overflow-y-auto">
        <div className="flex items-center justify-center max-w-[500px] w-[85%] max-h-[600px] h-[95%]">
          <Image
            src={previewURL}
            alt=""
            width={500}
            height={500}
            className={`w-full ${
              settings.cropType === "original"
                ? "h-full object-contain"
                : settings.cropType === "square"
                ? "aspect-square object-cover"
                : "aspect-video object-cover"
            }`}
          />
        </div>
      </div>

      <div className="flex-shrink-0 p-4 border-t-[1px] border-border-gray">
        <div className="relative">
          <div className="flex items-center justify-between  mb-2">
            <label className="text-blue-400 text-sm font-medium">
              Description
            </label>
            <button
              className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
              disabled
            >
              What is alt text?
            </button>
          </div>
          <textarea
            value={altText}
            onChange={(e) => onChangeAlt(e.target.value)}
            maxLength={maxLength}
            className="w-full h-20 bg-transparent border-[2px] border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
            placeholder="Describe image..."
          />

          <div className="absolute bottom-3 right-3 text-xs text-gray-500">
            {altText.length} / {maxLength.toLocaleString()}
          </div>
        </div>
      </div>
    </Modal.body>
  );
}
