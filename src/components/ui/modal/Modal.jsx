"use client";

import { useEffect } from "react";

// Modal Component
export default function Modal({ children, openModal, onClose, className }) {
  // Close modal when keydown ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };

    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (openModal) {
      document.addEventListener("keydown", handleEsc);

      document.body.style.overflow = "hidden"; // Prevent scroll
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = ``;
    };
  }, [openModal, onClose]);

  if (!openModal) return null;

  return (
    <div className={`fixed flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

// Backdrop Component
Modal.backdrop = ({ show, onClose, className }) => {
  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 transition-opacity duration-300 ${className}`}
      onClick={onClose}
    />
  );
};

// Content Component
Modal.content = ({ children, onClose, className, ...restProps }) => {
  return (
    <div
      className={`relative ${className}`}
      onClick={(e) => e.stopPropagation()} // Prevent close when clien inside
      {...restProps}
    >
      {children}
    </div>
  );
};

// Header Component
Modal.header = ({ children, className, onClose, showCloseButton = false }) => {
  return (
    <div className={className}>
      <div className="text-lg font-semibold text-inherit w-full">
        {children}
      </div>
      {showCloseButton && (
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
        >
          <div className="w-5 h-5">X</div>
        </button>
      )}
    </div>
  );
};

// Body Component
Modal.body = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

// Footer Component
Modal.footer = ({ children, className = "" }) => {
  return <div className={`flex items-center ${className}`}>{children}</div>;
};
