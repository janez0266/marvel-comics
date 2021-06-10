import React from "react";
import {verify} from "../utils/Constants"


const ModalListComics = (props) => {
    
  if (props.comicsItems.length === 0) {
      return (
        <div className="modal-list">
            < h2>... Este personaje no tiene Comics ....</h2>
        </div>
        )}
  return (
    <>
      <div className="modal-list">
        {props.comicsItems &&
          props.comicsItems.map((item, id) => (

            <a href={verify(item.urls[0].url)} target="_blank" rel="noreferrer" key={id}>
            <div className="modalItem" >
              <div className="imgComic" >
                <img
                  src={
                    item.thumbnail.path +
                    "." +
                    item.thumbnail.extension +
                    "?" +
                    props.urlKey
                  }
                ></img>
              </div>
              <div className="infoComic">
                <h2>{item.title}</h2>
                <p>{item.description} </p>
              </div>
            </div>
            </a>


          ))}
      </div>
    </>
  );
};

export default ModalListComics;
