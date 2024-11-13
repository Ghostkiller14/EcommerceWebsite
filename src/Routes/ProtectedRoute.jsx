import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CategoryManagment from "./components/admin/CategoryManagment";
import OrderManagment from "./components/admin/OrderManagment";
import ProductManagment from "./components/admin/ProductManagment";
import UserManagment from "./components/admin/UserManagment";

import Cart from "./components/cart/Cart";
import { CartProvider } from "./context/CartContext";
import { CategoryProvider } from "./context/CategoryContext";
import { OrderProvider } from "./context/OrderContext";
import { ProductProvider } from "./context/ProductContext";
import { UserProvider } from "./context/UserContext";
import Layout from "./layout/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signUp";
import UserDashboard from "./pages/UserDashboard";
import AdminRoute from "./Routes/AdminRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
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
        {
          path: "/UserDashboard",
          element: <UserDashboard />,
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
        },
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
        {
          path: "orders",
          element: <OrderManagment />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <OrderProvider>
        <CartProvider>
          <ProductProvider>
            <CategoryProvider>
              <RouterProvider router={router} />
              <ToastContainer position="top-center" />
            </CategoryProvider>
          </ProductProvider>
        </CartProvider>
      </OrderProvider>
    </UserProvider>
  );
}

export default App;
