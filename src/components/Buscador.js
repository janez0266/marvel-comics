import React from 'react'
import loupe from "../images/loupe.svg"
import "./Buscador.css"

const Buscador = () => {
    return (

        <div className="buscar">
            <img src={loupe} alt="" className="form-loupe_icon"></img>
            <div>
                <input type="text" name="busqueda" id="busqueda" placeholder="Buscar" required></input>

            </div>
        </div>

    )
}
export default Buscador;