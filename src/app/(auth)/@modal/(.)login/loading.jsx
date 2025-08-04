"use client";
import CircleNotchIcon from "@/components/icons/CircleNotchIcon";
import Modal from "@/components/ui/modal/Modal";

export default function Loading() {
  return (
    <Modal openModal={true} className="inset-0">
      <Modal.backdrop className="bg-backdrop" show={true} />
      <Modal.content className="flex flex-col rounded-2xl bg-black min-h-[400px] min-w-[600px] max-h[90vh] max-w-[80vh] h-[650px] w-[600px]">
        <div className="flex justify-around items-center h-full">
          <CircleNotchIcon className="fill-blue-500 size-5 animate-spin" />
        </div>
      </Modal.content>
    </Modal>
  );
}
