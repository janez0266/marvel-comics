import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {getCharactersAccion} from "../APIS/MarvelAPI"
import "./Galeria.css";
import MarvelKey from "../APIS/MarvelKey";
import Cards from "./Cards";
import WaitLoading from "./WaitLoading";
import Modal from "./Modal";
import Buttons from "./Buttons";

const Galeria = () => {
  // variables Redux
  const dispatch = useDispatch();
  const personajes = useSelector((store) => store.personajes.array);
  const loading = useSelector((store) => store.personajes.waitState);
  const showButtons = useSelector((store) => store.personajes.showButtons);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const handleOpenModal = (item) => {
    setIsModalOpen(true);
    setModalInfo(item);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const urlGetKey = new MarvelKey();
  const key = urlGetKey.urlString();

  useEffect(() => {
    dispatch(getCharactersAccion())
  }, [])

  return (
    <>
    <Buttons estado={showButtons} />
      <div className="contenedor">
        <Cards
          cardItems={personajes}
          urlKey={key}
          handleOpenModal={handleOpenModal}
        />
        <WaitLoading estado={loading} />
        <Modal
          handleClick={handleCloseModal}
          isModalOpen={isModalOpen}
          modalInfo={modalInfo}
        />
      </div>
    </>
  );
};

export default Galeria;
