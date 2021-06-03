import React from 'react'
import "./Galeria.css"
import star from "../images/star_favorite_white.png";
import character from "../images/black-widow.jpg";

const Galeria = () => {
    return (
        <div className="contenedor">

            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>
            <div className="cards">
                <div className="cardImage">                    
                    <img src={character}></img>
                </div>
                <div className="starCard">
                    <img src={star}></img>
                </div>
                <div className="name"><h2>IRON-MAN</h2></div>
            </div>


          

        </div>

    )
}

export default Galeria
