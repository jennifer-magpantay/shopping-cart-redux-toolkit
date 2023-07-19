import { useSelector, useDispatch } from "react-redux";
import { manageCartModalDisplay } from "../store/slices/cart/cartSlice";

import { Button } from "./Button";
import { ShoppingCartSimple } from "@phosphor-icons/react";

export const CartCta = () => {
  const { totalCartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleModalDisplay = () => {
    //modalDisplay();
    dispatch(manageCartModalDisplay());
  };
  return (
    <Button
      customClasses="cta cart"
      id="cart"
      type="button"
      text="Cart"
      icon={<ShoppingCartSimple size={18} weight="bold" />}
      dataCount={totalCartProducts}
      onClick={handleModalDisplay}
    />
  );
};
