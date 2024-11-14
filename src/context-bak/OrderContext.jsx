import { createContext, useEffect, useState } from "react";
import { GetAllOrders } from "../service-bak/OrderService";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrderData = async () => {
    setIsLoading(true);
    try {
      const res = await GetAllOrders();
      console.log(res);
      setOrders(Array.isArray(res) ? res : res.items || []);

      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        isLoading,
        error,
        orders,
        fetchOrderData,
        setOrders,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
