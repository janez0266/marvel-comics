import React from "react";


const ModalListComics = (props) => {
    console.log(props.comicsItems)
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
            <div className="modalItem" key={id}>
              <div className="imgComic">
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
                <h2>
                  {item.title} -- ID: {item.id}
                </h2>
                <p>{item.description} </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ModalListComics;
