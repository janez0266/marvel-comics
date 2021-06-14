import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getCharactersAccion} from "../actions/CharacterActions"
import "../styles/Galeria.css";
import { urlStringKey } from "../APIS/MarvelKey";
// import { setFavoriteStar } from "../APIS/FavoriteReducer";
import Cards from "./Cards";
import CardsComics from "./CardsComics";
import ComicsFull from "./ComicsFull";
import WaitLoading from "./WaitLoading";
import Modal from "./Modal";
import Buttons from "./Buttons";
import Popup from "./Popup";

const Galeria = () => {
  // variables Redux
  const dispatch = useDispatch();
  const personajes = useSelector((store) => store.personajes.array);
  // console.log("lista de personajes en Galerias: ", personajes)
  const loading = useSelector((store) => store.tools.loadingWindow);
  const showButtons = useSelector((store) => store.tools.showButtons);
  const showButtonsScrollCharacters = useSelector(
    (store) => store.tools.showButtonsScrollCards);
  const showCharacterCards = useSelector(
    (store) => store.tools.cardsCharacters);
  const comics = useSelector((store) => store.comics.arrayComics);
  const showCardsComics = useSelector((store) => store.tools.cardsComics);

  const showCardFull = useSelector((store) => store.tools.comicFullShow);
  const comicFullItemShow = useSelector((store) => store.comics.arrayComicFull);
  const showPopup = useSelector((store)=> store.tools.showPopupWindow);
  const msgPopup = useSelector((store)=> store.tools.mensajePopupWindow);
  //Variables HOOKs
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const handleOpenModal = (item) => {
    setIsModalOpen(true);
    setModalInfo(item);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // // mostrar la estrella amarilla si existen los favoritos
    // if(localStorage.getItem("favPersonajes")){
    //     return dispatch(setFavoriteStar(true))
    // }else {
    //     return dispatch(setFavoriteStar(false))
    // }

	
    // //   OJO  descomentar para mostrar el catalogo inicial
    // //buscar el listado aleatorio de personajes
     dispatch(getCharactersAccion())
  }, []);

  return (
    <>
      <Buttons estado={showButtons}
        scrollButtonCard={showButtonsScrollCharacters}/>
      <div className="contenedor">
        <Cards estado={showCharacterCards}
          cardItems={personajes}
          urlKey={urlStringKey}
          handleOpenModal={handleOpenModal} />
        <CardsComics estado={showCardsComics}
          cardItems={comics}
          urlKey={urlStringKey} />
        <ComicsFull estado={showCardFull} comicFull={comicFullItemShow} />
        <WaitLoading estado={loading} />
        <Modal handleClick={handleCloseModal}
          isModalOpen={isModalOpen}
          modalInfo={modalInfo} />
        <Popup estado={showPopup} mensaje={msgPopup} />
      </div>
    </>
  );
};

export default Galeria;
