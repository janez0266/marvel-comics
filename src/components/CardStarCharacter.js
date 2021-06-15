import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import starWhite from "../images/star_favorite_white.png";
import starGold from "../images/favoritesilver.png";
import { useDispatch } from "react-redux";
import { addCharToFavorite } from "../reducers/FavoriteReducer";
import Tooltip from '@material-ui/core/Tooltip';

const starCard = (idIn) => {
  const objetoFav = useSelector((store) => store.favorite.arrayFavCharacter);
  if (objetoFav.find((data) => data.id === idIn)) {
    return starGold;
  } else {
    return starWhite;
  }
};
const CardStarCharacter = ({ itemValues }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="starCard"
        onClick={() =>
          dispatch(
            addCharToFavorite(
              itemValues.name,
              itemValues.id,
              itemValues.thumbnail.path,
              itemValues.thumbnail.extension
            )
          )
        }
      >
        <Tooltip title="Agregar o quitar de los Favoritos" 
        arrow 
        leaveDelay={400}>
            <img src={starCard(itemValues.id)} />
        </Tooltip>
      </div>
    </>
  );
};

CardStarCharacter.propTypes = {
  itemValues: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }),
};

export default CardStarCharacter;
