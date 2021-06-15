import React, { useEffect } from "react";
import "../styles/Modal.css";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {clearComicsModal, getComicsByIdAccion} from "../actions/ComicsActions"
import {urlStringKey} from "../APIS/MarvelKey"
import ModalListComics from "./ModalListComics";
import { desactivarModal } from "../actions/ToolsActions";
import Tooltip from '@material-ui/core/Tooltip';

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
        <Tooltip 
          title="Puede seleccionar varios Comics y verlos luego al cerrar la ventana" 
          arrow 
          leaveDelay={400}>
          <div className="modal-encabezado">
            <a onClick={closeModal}>
              <h1>X</h1>
            </a>
            <h2> {selectedCharacter.name}</h2>
          </div>
        </Tooltip>

        <ModalListComics 
          comicsItems={comics} 
          urlKey={urlStringKey} />
      </div>
    </div>
  );
};


export default Modal;
