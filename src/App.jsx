import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CategoryManagment from "./component-bak/admin-bak/CategoryManagment-bak";
import OrderManagment from "./component-bak/admin-bak/OrderManagment-bak";
import ProductManagment from "./component-bak/admin-bak/ProductManagment-bak";
import UserManagment from "./component-bak/admin-bak/UserManagment-bak";

import Cart from "./component-bak/cart/Cart-bak";
import { CartProvider } from "./context-bak/CartContext";

import { CategoryProvider } from "./context-bak/CategoryContext";
import { OrderProvider } from "./context-bak/OrderContext";
import { ProductProvider } from "./context-bak/ProductContext";
import { UserProvider } from "./context-bak/UserContext";
import Layout from "./layout-bak/Layout";
import AdminDashboard from "./pages-bak/AdminDashboard";
import HomePage from "./pages-bak/HomePage";
import ProductDetails from "./pages-bak/ProductDetails";
import SignIn from "./pages-bak/SignIn";
import SignUp from "./pages-bak/SignUp";
import UserDashboard from "./pages-bak/UserDashboard";
import AdminRoute from "./routes-bak/AdminRoute";

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
            {
              path: "orders",
              element: <OrderManagment />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <OrderProvider>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <CategoryProvider>
              <RouterProvider router={router} />
              <ToastContainer position="top-center" />
            </CategoryProvider>
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </OrderProvider>
  );
}

export default App;
