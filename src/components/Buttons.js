import React from 'react'
import {useDispatch} from "react-redux";
import {getCharactersAccion, siguienteCharacterAccion, 
    anteriorCharacterAccion} from "../APIS/MarvelAPI"
import "./Buttons.css"


const Buttons = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="buttons" style={{ display: `${props.estado ? "flex" : "none"}`} }>
            <p onClick={() => dispatch(getCharactersAccion())}>Get Personajes</p>
            <p onClick={() => dispatch(siguienteCharacterAccion())}>Siguiente</p>
            <p onClick={() => dispatch(anteriorCharacterAccion())}>Anterior</p> 
            
      </div>
    )
}

export default Buttons

