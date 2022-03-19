import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCard] = useState([]);

  const addToCart = (item) => {
    setCard([...cart, item]);
    toast.success("Produto adicionado no carrinho!");
  };

  const removeFromCart = (item, indexProd) => {
    const newCart = cart.filter((item, index) => index !== indexProd);
    setCard(newCart);
    toast.success("Produto removido do carrinho!");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
