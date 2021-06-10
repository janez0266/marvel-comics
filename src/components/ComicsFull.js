import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {showCardsComics, showButtons} from "../APIS/ToolsActions"
import ShowCreators from "./ShowCreators"
//import star from "../images/star_favorite_white.png";
//import { mostrarImagen } from "../APIS/MarvelKey";
//import imgcomic from "../images/5155c42422277.jpg"
import "../styles/ComicsFull.css";

const ComicsFull = (props) => {
    const dispatch = useDispatch();
  
  return (
    <>
        <div className="comicItemC" style={{ display: `${props.estado ? "flex" : "none"}`} }>
            <div className="imgComiC">
                <img src={props.comicFull.image} /> 
            </div>
            <div className="infoComiC">
                <div className="infoButtons">
                    <a  href={props.comicFull.urlComic} target="_blank"
                    rel="noreferrer" >Ver Comic &gt;&gt;</a> 
                    <p className="back" onClick={() => { 
                        dispatch(showCardsComics()); 
                        dispatch(showButtons(true))}}>Volver </p>       
                </div>
                <h2> {props.comicFull.title}</h2>
                <div className="infotext">
                   <p>Published: {props.comicFull.published}</p>
                   <p>Creators: </p>
                   <ShowCreators creatorsItems={props.comicFull.creators} />               
                </div>
                <p className="descripcionC">{props.comicFull.description} </p>
            </div>
        </div>
    </>
  );
};


ComicsFull.propTypes = {
    estado: PropTypes.bool,
    image: PropTypes.string,
    title: PropTypes.string,
    published: PropTypes.string,
    description: PropTypes.string,
    urlComic: PropTypes.string
  
}

export default ComicsFull;
