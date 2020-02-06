import React from "react";
import Modal from "react-modal";
import "./modalstyles.css";
export default class MyModal extends React.Component {
  render() {
    const { modalData, isOpen, handleModalClose } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onClick={handleModalClose}
        onRequestClose={handleModalClose}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        className="Modal"
        overlayClassName="Overlay"
      >
        <span onClick={handleModalClose}>X</span>
        <img srcSet={modalData} />
      </Modal>
    );
  }
}
