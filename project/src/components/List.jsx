/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  addNewProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "../store/slices/cart/cartSlice";

import { Card } from "./Card";

export const List = ({ data, type }) => {
  const dispatch = useDispatch();
  if (!data) {
    return <p>No products to display</p>;
  }

  const handleAddProductToCart = (e, item) => {
    const dataId = e.target.dataset.id;
    switch (dataId) {
      case "add":
        return dispatch(addNewProductToCart(item));

      case "remove":
        return dispatch(removeProductFromCart(item));

      default:
        return dispatch(deleteProductFromCart(item.id));
    }
  };
  return (
    <ul>
      {data.map(
        (item) =>
          item.id && (
            <li key={item.id}>
              <Card
                title={item.title}
                description={item.description}
                brand={item.brand}
                price={item.price}
                quantity={item?.quantity}
              />

              <button
                type="button"
                data-id={type === "catalog" ? "add" : "remove"}
                onClick={(e) => handleAddProductToCart(e, item)}
              >
                {type === "catalog" ? "Add to cart" : "Remove from cart"}
              </button>

              {type === "cart" && (
                <button
                  type="button"
                  data-id="delete"
                  onClick={(e) => handleAddProductToCart(e, item)}
                >
                  Delete product
                </button>
              )}
            </li>
          )
      )}
    </ul>
  );
};
