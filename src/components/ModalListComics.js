import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from "react-router";


const ModalListComics = (props) => {

  const history = useHistory();

  return (
    <>
      <div className="modal-list">
        {props.comicsItems &&
          props.comicsItems.map((item, id) => (
            <div className="modalItem" 
              key={id} 
              onClick={() => {
                  history.push(`/comics/${item.id}`);       
                 }}>
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
            // </a>


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
