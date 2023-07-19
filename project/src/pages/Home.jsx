import { useSelector, useDispatch } from "react-redux";
import { loadProductsData } from "../store/slices/catalog/catalogSlice";
import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { Slider } from "../components/Slider";

let initialState = true;

export const Home = () => {
  const { catalogProducts } = useSelector((state) => state.catalog);
  const { isDataLoading } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialState) {
      dispatch(loadProductsData());
      initialState = false;
      return;
    }
  }, [dispatch]);

  const bestSellers = catalogProducts?.filter(
    (product) => product.rating > 4.5
  );

  const smartphones = catalogProducts?.filter(
    (product) => product.category === "smartphones"
  );

  const laptops = catalogProducts?.filter(
    (product) => product.category === "laptops"
  );
  return (
    <>
      <Hero />
      {isDataLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <Section id="best sellers" title="Best Sellers">
            <Slider data={bestSellers} />
          </Section>
          <Section id="smartphones" title="Smarphones">
            <Slider data={smartphones} />
          </Section>

          <Section id="laptops" title="Laptops">
            <Slider data={laptops} />
          </Section>
        </>
      )}
    </>
  );
};
