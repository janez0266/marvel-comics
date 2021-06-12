import React from 'react'
import { useSelector } from "react-redux";
import starWhite from "../images/star_favorite_white.png";
import starGold  from "../images/favoritesilver.png";
import { useDispatch } from "react-redux";
import { addCharToFavorite } from "../APIS/FavoriteReducer";

const starCard = (idIn) =>{
    const objetoFav = useSelector((store) => store.favorite.arrayFav);
    if(objetoFav.find( data => data.id === idIn) ){
      if(objetoFav){
          return starGold
      }else {
          return starWhite
      }    
  }
}
const CardStar = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <div
                className="starCard"
                onClick={() =>
                dispatch(addCharToFavorite(
                  props.itemValues.name,
                  props.itemValues.id,
                  props.itemValues.thumbnail.path,
                  props.itemValues.thumbnail.extension))}>
                <img src={starCard(props.itemValues.id)}/>
            </div>
        </>
    )
}

export default CardStar
