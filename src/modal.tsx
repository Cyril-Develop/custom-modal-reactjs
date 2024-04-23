import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./styles/modal.css";

interface ModalProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
  textColor?: string;
  backgroundColor?: string;
  iconColor?: string;
}

export function Modal({
  text,
  isOpen,
  onClose,
  textColor = "#fff",
  backgroundColor = "#157846",
  iconColor = "#000",
}: ModalProps) {
  const modalStyle: React.CSSProperties = {
    color: textColor,
    backgroundColor: backgroundColor,
  };

  const iconStyle: React.CSSProperties = {
    color: iconColor,
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
              style={iconStyle}
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
