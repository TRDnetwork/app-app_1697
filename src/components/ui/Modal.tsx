import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/40 p-0 rounded-lg shadow-xl max-w-lg w-full mx-auto border-0"
      onClose={onClose}
    >
      <div className="flex items-center justify-between border-b border-[#e0e0e0] px-6 py-4">
        <h3 className="text-lg font-semibold text-[#1a1a1a]">{title}</h3>
        <button
          onClick={onClose}
          className="text-[#6b6b6b] hover:text-[#1a1a1a] focus:outline-none focus:underline"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
      <div className="p-6">{children}</div>
    </dialog>,
    document.body
  );
};

Modal.displayName = "Modal";
---