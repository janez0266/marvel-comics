import React from 'react'
import PropTypes from "prop-types";
import "../styles/Popup.css"
import alerta from "../images/alerta.png"

const Popup = (props) => {
    return (
        <div className="popup"  
            style={{ display: `${props.estado ? "flex" : "none"}`} }>
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
Popup.propTypes = {
    estado: PropTypes.bool,
    mensaje: PropTypes.string
    
  };
export default Popup
