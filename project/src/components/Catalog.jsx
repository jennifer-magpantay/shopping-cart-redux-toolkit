import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductsData } from "../store/slices/catalog/catalogSlice";
import { List } from "./List";

export const Catalog = () => {
  const { catalogProducts } = useSelector((state) => state.catalog);
  const { isDataLoading } = useSelector((state) => state.catalog);

  const dispatch = useDispatch();

  // basic way to fetch data from server
  useEffect(() => {
    dispatch(loadProductsData());
  }, [dispatch]);

  return (
    <div>
      {isDataLoading ? (
        <p>Loading data...</p>
      ) : (
        <>
          Catalog
          <List data={catalogProducts} type="catalog" />
        </>
      )}
    </div>
  );
};
