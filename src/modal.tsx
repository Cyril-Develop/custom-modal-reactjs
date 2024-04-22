import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

interface ModalProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
  textColor?: string;
  backgroundColor?: string;
}

export function Modal({
  text,
  isOpen,
  onClose,
  textColor = "#fff",
  backgroundColor = "#157846",
}: ModalProps) {
  const modalStyle: React.CSSProperties = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  return (
    <div>
      {isOpen && (
        <div className="modal_wrapper">
          <div className="modal_wrapper_content" style={modalStyle}>
            <button
              type="button"
              className="modal_wrapper_content_btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
