import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Error } from "./pages/Error";
import { Checkout } from "./pages/Checkout";
import { Favourites } from "./pages/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <Product /> },
      { path: "checkout", element: <Checkout /> },
      { path: "favourites", element: <Favourites /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
