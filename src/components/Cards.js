/* eslint-disable react/prop-types */
import React from 'react'
import star from "../images/star_favorite_white.png";


const Cards = (props) => {
    return (
        < >
            {props.cardItems && props.cardItems.map(item => (
                <div className="cards" key={item}>
                    <div className="cardImage">
                        <img src={item.thumbnail.path + "." + item.thumbnail.extension + props.urlKey}></img>
                    </div>
                    <div className="starCard">
                        <img src={star}></img>
                    </div>
                    <div className="name">
                        <h2>{item.name}</h2>
                    </div>
                </div>
            ))}
        </ >
    )
}



export default Cards

