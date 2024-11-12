import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CategoryManagment from "./components/admin/CategoryManagment";
import ProductManagment from "./components/admin/ProductManagment";
import UserManagment from "./components/admin/UserManagment";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/cartContext";
import { CategoryProvider } from "./context/categoryContext";
import { ProductProvider } from "./context/productContext";
import Layout from "./layout/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";
import AdminRoute from "./Routes/AdminRoute";
import { UserProvider } from "./services/userContext";

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
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/dashboard/admin",
      element: <AdminRoute />,
      children: [
        {
          path: "",
          element: <AdminDashboard />,
          children: [
            {
              path: "users",
              element: <UserManagment />,
            },
            {
              path: "products",
              element: <ProductManagment />,
            },
            {
              path: "categories",
              element: <CategoryManagment />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <CategoryProvider>
            <RouterProvider router={router} />;
            <ToastContainer position="top-center" />
          </CategoryProvider>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
