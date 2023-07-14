import { useSelector } from "react-redux";

import { List } from "./List";
export const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);

  return (
    <div>
      Cart
      <List data={cartProducts} type="cart" />
    </div>
  );
};
