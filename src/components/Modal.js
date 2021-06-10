import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import "../styles/Modal.css";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {getComicsByIdAccion} from "../APIS/ComicsAPI"
import {urlStringKey} from "../APIS/MarvelKey"
import ModalListComics from "./ModalListComics";


const Modal = (props) => {
  const dispatch = useDispatch();
  const comics = useSelector((store) => store.comics.array);
  const id = props.modalInfo?.id;

  useEffect(() => {
    if (id) {
    dispatch(getComicsByIdAccion(id))
    }
  }, [id])


  return (
    <div
      id="miModal"
      className="modal"
      style={{
        opacity: props.isModalOpen ? 1 : 0,
        pointerEvents: props.isModalOpen ? "auto" : "none",
      }}>
      <div className="modal-contenido">
        <div className="modal-encabezado">
          <a onClick={props.handleClick}>
            <h1>X</h1>
          </a>
          <h2> {props.modalInfo?.name}</h2>
        </div>
        <ModalListComics comicsItems={comics} urlKey={urlStringKey} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleClick: PropTypes.func,
  isModalOpen: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number,

  
}

export default Modal;
