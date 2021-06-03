import React from 'react'
import "./Modal.css"

const Modal = () => {
    return (
        <div>
            <div id="miModal" className="modal">
                <div className="modal-contenido">
                    <a href="">X</a>
                    <h2>Mi primer Modal</h2>
                    <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
