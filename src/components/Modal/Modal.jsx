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
        <div className="row">
          <h2 className="modalTitle">Title</h2>
          <div onClick={handleModalClose} className="close">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="imageContainer">
          <img srcSet={modalData} alt="imgasd" className="modalImage" />
        </div>
        <p className="modalText">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
          voluptate. Soluta iusto amet aspernatur debitis rem aliquam voluptatum
          tenetur nihil consectetur fugiat recusandae vel, libero delectus
          quaerat magni sequi beatae perferendis expedita. Voluptatum
          necessitatibus voluptates laudantium soluta architecto ut dolorum!
          Rerum, aut temporibus eos officiis obcaecati nulla esse cupiditate
          consequatur! Error, officia! Sed cupiditate ratione voluptatem quae
          tenetur fuga, iste nostrum accusamus placeat quis corporis, nobis
          eaque! Alias numquam nulla blanditiis, accusamus earum, sunt unde quod
          velit architecto sint modi. Similique sunt velit officia, quisquam
          quia debitis aliquam quod atque dolorum itaque accusamus quo rem,
          reiciendis sit, dignissimos earum molestiae.t quis corporis, nobis
          eaque! Alias numquam nulla blanditiis, accusamus earum, sunt unde quod
          velit architecto sint modi. Similique sunt velit officia, quisquam
          quia debitis aliquam quod atque dolorum itaque accusamus quo rem,
          reiciendis sit, dignissimos earum molestiae.tenetur fuga, iste nostrum
          accusamus placeat quis corporis, nobis eaque! Alias numquam nulla
          blanditiis, accusamus earum, sunt unde quod velit architecto sint
          modi. Similique sunt velit officia, quisquam quia debitis aliquam quod
          atque dolorum itaque accusamus quo rem, reiciendis sit, dignissimos
          earum molestiae.t quis corporis, nobis eaque! Alias numquam nulla
          blanditiis, accusamus earum, sunt unde quod velit architecto sint
          modi. Similique sunt velit officia, quisquam quia debitis aliquam quod
          atque dolorum itaque accusamus quo rem, reiciendis sit, dignissimos
          earum molestiae.
        </p>
      </Modal>
    );
  }
}
