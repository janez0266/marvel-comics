import React from "react";
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {showCardsComics, showButtons} from "../actions/ToolsActions"
import ShowCreators from "./ShowCreators"
import {fecha} from "../utils/Constants"
import "../styles/ComicsFull.css";
import { useHistory } from "react-router";

const ComicsFull = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
  
  return (
    <>
    {/* style={{ display: `${props.estado ? "flex" : "none"}`} } */}
        <div className="comicItemC" >
            <div className="imgComiC">
                <img src={props.comicFull.image} /> 
            </div>
            <div className="infoComiC">
                <div className="infoButtons">
                    <a  href={props.comicFull.urlComic} target="_blank"
                    rel="noreferrer" >Ver Comic &gt;&gt;</a> 
                    <p className="back" onClick={() => { 
                        // dispatch(showCardsComics()); //colocar aqui la ruta a la vista de los comics
                        // dispatch(showButtons(true))
                        history.push(`${props.pathBack}`)
                        }}>Volver </p>       
                </div>
                <h2> {props.comicFull.title}</h2>
                <div className="infotext">
                   <p>Published: {fecha(props.comicFull.published)}</p>
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
