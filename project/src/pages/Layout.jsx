import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Modal } from "../components/Modal";
import { ProductList } from "../components/ProductList";
import { Navigation } from "../components/Navigation";
import { CartCta } from "../components/CartCta";

const navigation = [
  { id: "", title: "Home" },
  { id: "products", title: "Products" },
  { id: "favourites", title: "Favourites" },
];

export const Layout = () => {
  const { isCartModalDisplayed } = useSelector((state) => state.cart);
  const { cartProducts } = useSelector((state) => state.cart);
  return (
    <>
      <Header>
        <Navigation data={navigation} />
        <CartCta />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Modal isModalDisplayed={isCartModalDisplayed} title="Orders list">
        {cartProducts.length === 0 ? (
          <p>There are no orders to be displayed</p>
        ) : (
          <ProductList data={cartProducts} type="cart" direction="column" />
        )}
      </Modal>
    </>
  );
};
