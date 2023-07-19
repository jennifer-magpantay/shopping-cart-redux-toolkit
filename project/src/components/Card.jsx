/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  catalogSlice,
  manageFavouriteItem,
} from "../store/slices/catalog/catalogSlice";
import { addNewProductToCart } from "../store/slices/cart/cartSlice";

import { Button } from "../components/Button";
import { ArrowSquareOut, Heart } from "@phosphor-icons/react";

export const Card = ({
  id,
  title,
  description,
  brand,
  price,
  quantity,
  subtotal,
  direction,
  isFavourite,
  image,
  item,
}) => {
  const { catalogProducts } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const handleManageFavourite = (e, id) => {
    dispatch(manageFavouriteItem(id));
  };

  const handleAddProductToCart = (e, id) => {
    const item = catalogProducts.find((product) => product.id === id);
    dispatch(addNewProductToCart(item));
  };

  return (
    <div className={`card  ${direction ? direction : ""}`}>
      <button
        type="button"
        className="card--icon-heart"
        onClick={(e) => handleManageFavourite(e, id)}
      >
        {isFavourite ? <Heart size={32} weight="fill" /> : <Heart size={32} />}
      </button>
      <span className="card--title">{title}</span>
      <span className="card--desc">{description}</span>
      <span className="card--brand">{brand}</span>
      {image && (
        <div className="card--image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <span className="card--price">Price: {price}</span>
      {quantity && <span> ** {quantity}</span>}
      {subtotal && <span>$$ {subtotal}</span>}
      <div className="card--footer">
        <Button
          type="button"
          text="ADD"
          dataId={id}
          customClasses="cta"
          onClick={(e) => handleAddProductToCart(e, id)}
        />
        <Link to={`/products/${id}`}>
          <ArrowSquareOut size={32} />
        </Link>
      </div>
    </div>
  );
};
