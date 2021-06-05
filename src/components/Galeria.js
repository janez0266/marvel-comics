import React, { useEffect, useState } from "react";
import "./Galeria.css";
import MarvelAPI from "../APIS/MarvelAPI";
import Cards from "./Cards";
import WaitLoading from "./WaitLoading";
import "./WaitLoading.css";
// import styled from "styled-components"
import Modal from "./Modal";

// const Prueba = styled.h1`
//     color: blue;
// `
const Galeria = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const handleOpenModal = (item) => {
    setIsModalOpen(true);
    setModalInfo(item);
  };

  const handleCloseModal = () => {
    console.log(isModalOpen);
    console.log("click");
    setIsModalOpen(false);
  };
  useEffect(() => {
    const api = new MarvelAPI();
    api
      .getMarvelList()
      .then((json) => {
        const res = json;
        const cards = res.data.results;
        setPosts(cards);
        setLoading(false);
               
      })
      .catch((err) => console.log(err));
  }, []);

  const urlGetKey = new MarvelAPI();
  const key = urlGetKey.urlString();

  return (
    <div className="contenedor">
      <Cards cardItems={posts} urlKey={key} handleOpenModal={handleOpenModal} />
      <WaitLoading estado={loading} />
      <Modal
        handleClick={handleCloseModal}
        isModalOpen={isModalOpen}
        modalInfo={modalInfo}
      />
    </div>
  );
};

export default Galeria;
