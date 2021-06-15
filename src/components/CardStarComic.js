import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import starWhite from "../images/star_favorite_white.png";
import starGold from "../images/favoritesilver.png";
import { useDispatch } from "react-redux";
import { addComicToFavorite } from "../reducers/FavoriteReducer";
import Tooltip from '@material-ui/core/Tooltip';

const starCardComic = (idIn) => {
  const objetoFavComic = useSelector((store) => store.favorite.arrayFavComics);
  if (objetoFavComic.find((data) => data.id === idIn)) {
    return starGold;
  } else {
    return starWhite;
  }
};
const CardStarComic = ({ itemComicValues }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="starCardC"
        onClick={() =>
          dispatch(
            addComicToFavorite(
             itemComicValues
            )
          )
        }
      >
        <Tooltip title="Agregar o quitar de los Favoritos" 
          arrow 
          leaveDelay={400}>
          <img src={starCardComic(itemComicValues.id)} />
        </Tooltip>
      </div>
    </>
  );
};
CardStarComic.propTypes = {
  itemComicValues: PropTypes.shape({
    id: PropTypes.number
    })
  
};
export default CardStarComic;
