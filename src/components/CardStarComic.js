import React from "react";
import { useSelector } from "react-redux";
import starWhite from "../images/star_favorite_white.png";
import starGold from "../images/favoritesilver.png";
import { useDispatch } from "react-redux";
import { addComicToFavorite } from "../reducers/FavoriteReducer";

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
  // const imgSrc = starCardComic(itemComicValues.is)
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
        <img src={starCardComic(itemComicValues.id)} />
      </div>
    </>
  );
};

export default CardStarComic;
