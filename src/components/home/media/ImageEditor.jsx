import Modal from "@/components/ui/modal/Modal";
import { useState } from "react";
import CropImage from "./setting/CropImage";
import DescriptionImage from "./setting/DescriptionImage";
import WarningImage from "./setting/WarningImage";
import { MEDIA_SETTINGS_TABS } from "@/config/constants";
import Link from "next/link";

export default function ImageEditor({ previewURL, openModal, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [settings, setSettings] = useState({
    cropType: "original",
    alt: "",
    sensitiveFlags: [],
  });

  const handleChangeCropType = (type) => {
    setSettings((prev) => ({ ...prev, cropType: type }));
  };

  const handleChangeAlt = (text) => {
    setSettings((prev) => ({ ...prev, alt: text }));
  };

  const handleChangeSensitive = (option) => {
    setSettings((prev) => ({
      ...prev,
      sensitiveFlags: prev.sensitiveFlags.includes(option)
        ? prev.sensitiveFlags.filter((val) => val !== option)
        : [...prev.sensitiveFlags, option],
    }));
  };

  return (
    <Modal
      className="inset-0 z-50 py-2"
      onClose={onClose}
      openModal={openModal}
    >
      <Modal.backdrop className="bg-backdrop" show={true} />

      <Modal.content className="flex flex-col rounded-xl w-[600px] max-h-[960px] h-[90vh] bg-black outline-white/10 -outline-offset-1 overflow-auto">
        <Modal.header
          className="flex items-center justify-between min-h-14 px-4"
          showCloseButton={false}
        >
          <div className="flex items-center">
            <div className="flex items-center min-w-[45px]">
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-800"
                onClick={onClose}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  className="cursor-pointer"
                >
                  <path
                    fill="#e7e9ea"
                    d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1">
              <span className="font-bold text-xl">
                {
                  MEDIA_SETTINGS_TABS.find(({ id, _ }) => id === activeTab)
                    ?.title
                }
              </span>
            </div>
          </div>
        </Modal.header>

        <Modal.body className="flex min-h-14 cursor-pointer select-none border-b-[1px] border-border-gray">
          {MEDIA_SETTINGS_TABS.map((tab) => (
            <div
              key={tab.id}
              className={`flex flex-1 justify-center hover:bg-neutral-900 ${
                activeTab !== tab.id
                  ? "text-gray-600 fill-gray-600 hover:text-foreground "
                  : "fill-foreground"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Link
                href=""
                className="relative flex w-full items-center justify-center"
              >
                {tab?.icon ? (
                  <tab.icon />
                ) : (
                  <span className="font-bold px-1.5">{tab.name}</span>
                )}

                {activeTab === tab.id && (
                  <span className="absolute bottom-0 w-[30%] h-1 bg-blue-500" />
                )}
              </Link>
            </div>
          ))}
        </Modal.body>

        {previewURL && activeTab === 0 && (
          <CropImage
            previewURL={previewURL}
            cropType={settings.cropType}
            onChangeCropType={handleChangeCropType}
          />
        )}
        {previewURL && activeTab === 1 && (
          <DescriptionImage
            previewURL={previewURL}
            settings={settings}
            altText={settings.alt}
            onChangeAlt={handleChangeAlt}
          />
        )}
        {previewURL && activeTab === 2 && (
          <WarningImage
            previewURL={previewURL}
            settings={settings}
            onChangeSensitive={handleChangeSensitive}
          />
        )}
      </Modal.content>
    </Modal>
  );
}
