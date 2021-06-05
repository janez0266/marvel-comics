import React from 'react'
import "./WaitLoading.css"
import PropTypes from 'prop-types'


const WaitLoading = (props) => {
 
    return (
        
        <div>
            
            <div className="mensaje" id="mensaje" style={{ display: `${props.estado ? "block" : "none"}`} } >
           
                <div><p>Espere..... Cargando los datos...</p></div>
                <div className="donut"></div> 
            </div>
        </div>
    )
}

WaitLoading.propTypes= {
    estado: PropTypes.bool,
}

export default WaitLoading
