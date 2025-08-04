import Image from "next/image";
import { useEffect, useState } from "react";
import ImageEditor from "../media/ImageEditor";

export default function ImagePreview({ item, onRemove }) {
  const [previewURL, setPreviewURL] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const url = URL.createObjectURL(item.file);
    setPreviewURL(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [item.id]);

  return (
    <div className="relative rounded-xl overflow-hidden max-w-full flex-shrink-0 snap-center mr-8">
      {previewURL && (
        <Image
          src={previewURL}
          alt=""
          className="w-full h-full object-contain"
          width={600}
          height={600}
        />
      )}
      <div className="absolute top-2 left-2 bg-black/60 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer select-none hover:bg-gray-900/60" onClick={() => setOpenModal(true)}>
        Edit
      </div>
        
      <div className="absolute top-2 right-2 bg-black/60 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm hover:bg-gray-900/60" onClick={() => onRemove(item.id)}>
        x
      </div>

      <ImageEditor previewURL={previewURL} openModal={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
