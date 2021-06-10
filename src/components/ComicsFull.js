import React from "react";
import {useDispatch} from "react-redux";
import {showCardsComics, showButtons} from "../APIS/ToolsReducer"
//import star from "../images/star_favorite_white.png";
//import { mostrarImagen } from "../APIS/MarvelKey";
//import imgcomic from "../images/5155c42422277.jpg"
import "./ComicsFull.css";

const ComicsFull = (props) => {
    const dispatch = useDispatch();
  
  return (
    <>
        <div className="comicItemC" style={{ display: `${props.estado ? "flex" : "none"}`} }>
            <div className="imgComiC">
                <img src={props.comicFull.image} /> 
                {console.log(props.comicFull.image)}
            </div>
            <div className="infoComiC">
                <h2> {props.comicFull.title}</h2>
                <div className="infotext">
                <p>Published: {props.comicFull.published}</p>
                <p>Writer: {props.comicFull.writer}</p>
                <p>Penciler: {props.comicFull.penciler}</p>
                <p>Cover Artist: {props.comicFull.coverArtist}</p>
                </div>
                
                <p className="descripcionC">{props.comicFull.description} </p>
                <a 
                    href={props.comicFull.urlComic}
                    target="_blank"
                    rel="noreferrer" >Ver Comic &gt;&gt;</a> 
                    <p className="back" onClick={() => { 
                        dispatch(showCardsComics()); 
                        dispatch(showButtons(true))}}>Volver </p>          
                        
                         
            </div>
        </div>
                 
      
    </>
  );
};

export default ComicsFull;
