import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");

    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState(loadCartFromLocalStorage);


  const saveCartToLocalStorage = (cartItem) => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productId === product.productId
      );

      let updateCart;

      if (existingProductIndex >= 0) {
        updateCart = [...prevCart];
        updateCart[existingProductIndex].quantity += 1;
      } else {
        updateCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updateCart);
      return updateCart;
    });
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.productId === product.productId
      );

      let updateCart;

      if (existingProductIndex >= 0) {
        updateCart = [...prevCart];
        updateCart[existingProductIndex].quantity -= 1;
      } else {
        updateCart = [...prevCart, { ...product, quantity: 1 }];
      }

      saveCartToLocalStorage(updateCart);
      return updateCart;
    });
  };

  const removeCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => {
        return item.productId !== productId;
      });

      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    saveCartToLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCart, clearCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
