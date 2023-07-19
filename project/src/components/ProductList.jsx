/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  addNewProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "../store/slices/cart/cartSlice";

import { Card } from "./Card";

export const ProductList = ({ data, type, direction }) => {
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
        return dispatch(deleteProductFromCart(item));
    }
  };

  return (
    <ul className={`list ${direction ? direction : ""}`}>
      {data.map(
        (item) =>
          item.id && (
            <li key={item.id}>
              <Card
                id={item.id}
                title={item.title}
                description={item.description}
                brand={item.brand}
                price={item.price}
                quantity={item?.quantity}
                subtotal={item?.subtotal}
                item={item}
                direction={direction}
                isFavourite={item?.isFavourite}
                image={item?.images[0]}
              />

              {type === "catalog" && (
                <button
                  type="button"
                  data-id="add"
                  onClick={(e) => handleAddProductToCart(e, item)}
                >
                  Add to cart
                </button>
              )}

              {type === "cart" && (
                <>
                  <button
                    type="button"
                    data-id="add"
                    onClick={(e) => handleAddProductToCart(e, item)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    data-id="remove"
                    onClick={(e) => handleAddProductToCart(e, item)}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    data-id="delete"
                    onClick={(e) => handleAddProductToCart(e, item)}
                  >
                    Delete product
                  </button>
                </>
              )}
            </li>
          )
      )}
    </ul>
  );
};
