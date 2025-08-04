// "use client";
// import Modal from "@/components/ui/modal/Modal";

// export default function Layout({ children }) {
//   return (
//     <Modal openModal={true} className="inset-0">
//       <Modal.backdrop className="bg-backdrop" show={true} />

//       <Modal.content className="flex flex-col rounded-2xl bg-black min-h-[400px] min-w-[600px] max-h[90vh] max-w-[80vh] h-[650px] w-[600px]">
//         {children}
//       </Modal.content>
//     </Modal>
//   );
// }

export default function Layout({ children }) {
  return <>{children}</>;
}
