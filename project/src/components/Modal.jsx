/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "./Button";

import { X } from "@phosphor-icons/react";
import { manageCartModalDisplay } from "../store/slices/cart/cartSlice";

export const Modal = ({ isModalDisplayed, title, children }) => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const modalDiv = document.querySelector("#modal");

  const handleModalDisplay = () => {
    dispatch(manageCartModalDisplay());
  };

  const handleCheckout = () => {
    //modalDisplay();
  };

  if (!isModalDisplayed) return null;

  const modal = (
    <div className="modal">
      <div className="modal--header">
        <h3>{title}</h3>
        <Button
          id="close-modal"
          type="button"
          text="Close modal"
          customClasses="icon"
          icon={<X size={32} />}
          onClick={handleModalDisplay}
        />
      </div>
      <div className="modal--body">{children}</div>
      {cartProducts.length !== 0 && (
        <div className="modal--footer">
          <Button
            id="checkout"
            type="button"
            text="Proceed to checkout"
            customClasses="cta center"
            onClick={handleCheckout}
          />
        </div>
      )}
    </div>
  );

  if (modalDiv) {
    return createPortal(
      <>
        <div className="modal--overlay" />
        {modal}
      </>,
      modalDiv
    );
  }
};
