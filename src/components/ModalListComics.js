import React from "react";
import PropTypes from 'prop-types';
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

ModalListComics.propTypes = {
  comicsItems: PropTypes.array,
  urlKey: PropTypes.string,
  item: PropTypes.shape({
      urls: PropTypes.array,
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.shape({
         path: PropTypes.string,
        extension: PropTypes.string
      })
    })
}


export default ModalListComics;
