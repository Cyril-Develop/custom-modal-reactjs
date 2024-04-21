import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

interface ModalProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ text, isOpen, onClose }: ModalProps) {
  return (

    <div>
      {isOpen && (
        <div className="modal_wrapper">
          <div className="modal_wrapper_content">
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
};