import React, { useEffect } from "react";
import "./Modal.css";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {getComicsByIdAccion} from "../APIS/ComicsAPI"
import MarvelKey from "../APIS/MarvelKey";
import ModalListComics from "./ModalListComics";
import WaitLoading from "./WaitLoading";

const Modal = (props) => {
  const dispatch = useDispatch();
  const comics = useSelector((store) => store.comics.array);
  const loading = useSelector((store) => store.comics.waitStateComics);
  const id = props.modalInfo?.id;
  const urlGetKey = new MarvelKey();
  const key = urlGetKey.urlString();
  console.log("MODAL: el id del personaje es: ", id)
  useEffect(() => {
    if (id) {
    dispatch(getComicsByIdAccion(id))
    console.log("Pasando por el useEffect del comics")
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
        <ModalListComics comicsItems={comics} urlKey={key} />
        <WaitLoading estado={loading} />
      </div>
    </div>
  );
};

export default Modal;
