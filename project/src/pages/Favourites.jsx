import { useSelector } from "react-redux";
export const Favourites = () => {
  const { favourites } = useSelector((state) => state.catalog);
  return (
    <div>
      {favourites &&
        favourites.map((product) => <p key={product?.id}>{product?.title}</p>)}
    </div>
  );
};
