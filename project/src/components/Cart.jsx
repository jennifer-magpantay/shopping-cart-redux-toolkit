import { useSelector } from "react-redux";

import { ProductList } from "./ProductList";
export const Cart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const { totalCartProducts } = useSelector((state) => state.cart);

  return (
    <div>
      Cart <span>{totalCartProducts}</span>
      <ProductList data={cartProducts} type="cart" />
    </div>
  );
};
