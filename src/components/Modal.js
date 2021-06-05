import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div
      id="miModal"
      className="modal"
      style={{
        opacity: props.isModalOpen ? 1 : 0,
        pointerEvents: props.isModalOpen ? "auto" : "none",
      }}
    >
      <div className="modal-contenido">
        <a onClick={props.handleClick}><h1>X</h1></a>
        <h2> {props.modalInfo?.name}</h2>
        {console.log(props.modalInfo?.comics)}
        <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
      </div>
    </div>
  );
};

export default Modal;
