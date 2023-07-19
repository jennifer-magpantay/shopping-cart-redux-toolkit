import { useSelector } from "react-redux";
import { ProductList } from "./ProductList";

export const Catalog = () => {
  const { catalogProducts } = useSelector((state) => state.catalog);
  const { isDataLoading } = useSelector((state) => state.catalog);

  return (
    <div>
      {isDataLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          Catalog
          <ProductList data={catalogProducts} type="catalog" direction="row" />
        </>
      )}
    </div>
  );
};
