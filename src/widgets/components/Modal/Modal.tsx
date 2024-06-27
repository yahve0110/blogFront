import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./Modal.module.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../app/store/store";
import { closeModal } from "../../../features/modalSlice/modalSlice";

const Modal = ({ children }: { children: ReactNode }) => {
  const stopPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div
      onClick={handleCloseModal}
      className={`${isModalOpen ? styles.modelContainer : ""}`}
    >
      <div
        onClick={stopPropagation}
        className={`${isModalOpen ? styles.modalOpen : styles.modalClosed}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
