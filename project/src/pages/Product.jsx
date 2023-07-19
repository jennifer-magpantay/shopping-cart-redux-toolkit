import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadProductData } from "../store/slices/catalog/catalogSlice";
export const Product = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(loadProductData(productId));
  }, [dispatch]);

  return (
    <div>{product ? <p>{product.title}</p> : <p>No products found</p>}</div>
  );
};
