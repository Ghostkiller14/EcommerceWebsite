import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ProductProvider } from "./context/productContext";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

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
