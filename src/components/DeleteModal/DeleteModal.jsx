import React from "react";
import Modal from "./../Modal/Modal";
import "./DeleteModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DeleteModal = ({ isOpen, setIsOpen, onDelete }) => {
  function exitBtnHandler() {
    setIsOpen(false);
  }

  function handleModalEvent(ev) {
    if (ev.target.textContent.toLowerCase() === "delete") {
      onDelete(true);
    } else {
      onDelete(false);
    }
    exitBtnHandler(); // close
  }
  return (
    <Modal isOpen={isOpen}>
      <div class="card">
        <div class="card__content">
          <p class="card__heading">Delete task?</p>
          <p class="card__description">
            Do you want to delete this task?
          </p>
        </div>
        <div class="card__button-wrapper">
          <button class="card__button secondary" onClick={handleModalEvent}>
            Cancel
          </button>
          <button class="card__button primary" onClick={handleModalEvent}>
            Delete
          </button>
        </div>
        <button class="card__exit-button" onClick={exitBtnHandler}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
