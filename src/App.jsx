import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoryProvider } from "./context/categoryContext";
import { ProductProvider } from "./context/productContext";
import Layout from "./layout/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";

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
          element: <ProductDetails />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "admin/dashboard",
          element: <AdminDashboard />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <CategoryProvider>
        <RouterProvider router={router} />;
      </CategoryProvider>
    </ProductProvider>
  );
}

export default App;
