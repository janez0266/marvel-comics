import React from 'react'
import "../styles/Popup.css"
import alerta from "../images/alerta.png"

const Popup = (props) => {
    return (
        

        <div className="popup"  style={{ height: `${props.estado ? "200px" : "0"}`} }>
           <div className="contenidoPopup">
                <div className= "popupImage">
                    <img src={alerta} />
                </div>
                <div className="popupText">
                    <p>{props.mensaje}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Popup
