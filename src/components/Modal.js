import React, { useState, useEffect } from "react";
import "./Modal.css";
import MarvelAPI from "../APIS/MarvelAPI";
import ModalListComics from "./ModalListComics";
import WaitLoading from "./WaitLoading";

const Modal = (props) => {
  const [postComics, setPostComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.modalInfo?.id;

  useEffect(() => {
    if (id) {
      const api = new MarvelAPI();
      api.getMarvelComicsListByID(id)
        .then((json) => {
          const res = json;
          const comics = res.data.results;
          console.log(res);
          setPostComics(comics);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          window.alert("Error al descargar el contenido.. Intente mas tarde..."
          );
        });
    }
  }, [id]);

  
  const urlGetKey = new MarvelAPI();
  const key = urlGetKey.urlString();
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
        <ModalListComics comicsItems={postComics} urlKey={key} />
        <WaitLoading estado={loading} />
      </div>
    </div>
  );
};

export default Modal;
