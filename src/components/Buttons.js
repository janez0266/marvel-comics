import React from 'react'
import {useDispatch} from "react-redux";
import {siguienteCharacterAccion, 
    anteriorCharacterAccion} from "../APIS/MarvelAPI"
import {showCardsCharacters, showCardsComics} from "../APIS/ToolsReducer"
import "./Buttons.css"


const Buttons = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="buttons" style={{ display: `${props.estado ? "flex" : "none"}`} }>
            
            
            <div className="scrollButtons" style={{ display: `${props.scrollButtonCard ? "flex" : "none"}`} } >
                <p onClick={() => dispatch(anteriorCharacterAccion())}>&lt;&lt; Anterior</p>
                <p onClick={() => dispatch(siguienteCharacterAccion())}>Siguiente &gt;&gt;</p>
                 
            </div>
            <div className="scrollButtons-comics" style={{ display: `${props.scrollButtonCard ? "none" : "flex"}`} } >
                <p onClick={() => dispatch(anteriorCharacterAccion())}>&lt;&lt; Anterior</p>
                <p onClick={() => dispatch(siguienteCharacterAccion())}>Siguiente &gt;&gt;</p>
                 
            </div>
            <div className="showCharactersComicsButtons"  >
                <p className="personajes" onClick={() => dispatch(showCardsCharacters())}>Personajes</p>
                <p className="comics" onClick={() => dispatch(showCardsComics())}>Comics</p>
            </div>
      </div>
    )
}

export default Buttons

