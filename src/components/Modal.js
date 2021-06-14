import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import "../styles/Modal.css";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {clearComicsModal, getComicsByIdAccion} from "../actions/ComicsActions"
import {urlStringKey} from "../APIS/MarvelKey"
import ModalListComics from "./ModalListComics";
import { desactivarModal } from "../actions/ToolsActions";


const Modal = () => {
  const dispatch = useDispatch();
  const comics = useSelector((store) => store.comics.array);
  const isModalOpen = useSelector((store) => store.tools.isModalOpen)
  // const id = props.modalInfo?.id;
  const selectedCharacter = useSelector((store)=> store.personajes.selected)

  useEffect(() => {
    if (selectedCharacter.id) {
    dispatch(getComicsByIdAccion(selectedCharacter.id))
    }
  }, [selectedCharacter])
  const closeModal = () => {
    // TODO: hacer que limpie los comics al cerrar
    dispatch(clearComicsModal());
    dispatch(desactivarModal());
  }

  return (
    <div
      id="miModal"
      className="modal"
      style={{
        opacity: isModalOpen ? 1 : 0,
        pointerEvents: isModalOpen ? "auto" : "none",
      }}>
      <div className="modal-contenido">
        <div className="modal-encabezado">
          <a onClick={closeModal}>
            <h1>X</h1>
          </a>
          <h2> {selectedCharacter.name}</h2>
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
