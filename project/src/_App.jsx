import { useSelector } from "react-redux";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Hero } from "./components/Hero";
import { Catalog } from "./components/Catalog";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { ProductList } from "./components/ProductList";

export const App = () => {
  const { isCartModalDisplayed } = useSelector((state) => state.cart);
  const { cartProducts } = useSelector((state) => state.cart);
  return (
    <>
      <Header />
      <Main>
        <Hero />
        {/* <Cart /> */}
        <Catalog />
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
