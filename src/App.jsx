import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductProvider } from "./context/productContext";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/HomePage",
          element: <HomePage />,
        },
        {
          path: "/HomePage/:id",
          element: <ProductDetails  />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <RouterProvider router={router} />;
    </ProductProvider>
  );
}

export default App;
