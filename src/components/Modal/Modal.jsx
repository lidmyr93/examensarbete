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
        <div className="close">
          <div onClick={handleModalClose} className="closeButton">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="content">
          <div className="imageContainer">
            <img srcSet={modalData} alt="imgasd" className="modalImage" />
          </div>
          <div className="row">
            <h2 className="modalTitle">Title</h2>
            <p className="modalText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              voluptate. Soluta iusto amet aspernatur debitis rem aliquam
              voluptatum tenetur nihil consectetur fugiat recusandae vel, libero
              delectus quaerat magni sequi beatae perferendis expedita.
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}
