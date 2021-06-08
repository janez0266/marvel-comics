import React from 'react'
import {useDispatch} from "react-redux";
import {getCharactersAccion, siguienteCharacterAccion, 
    anteriorCharacterAccion} from "../APIS/MarvelAPI"


const Buttons = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="buttons" style={{ display: `${props.estado ? "flex" : "none"}`} }>
            <button onClick={() => dispatch(getCharactersAccion())}>Get Personajes</button>
            <button onClick={() => dispatch(anteriorCharacterAccion())}>Anterior</button> 
            <button onClick={() => dispatch(siguienteCharacterAccion())}>Siguiente</button>
      </div>
    )
}

export default Buttons

