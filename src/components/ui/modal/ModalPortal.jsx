"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function ModalPortal({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>,
    document.body
  );
}
