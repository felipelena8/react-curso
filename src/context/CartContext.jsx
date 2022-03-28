import React, { useState, createContext, useContext } from "react";
import Item from "../componentes/Item";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const addToCart = (item) => {
    let prod = isInCart(item.id);
    if (prod) {
      let index = cartList.indexOf(prod);
      let arr = [...cartList];
      arr[index] = { ...item, cantidad: arr[index].cantidad + item.cantidad };
      //Se acumulan las cantidades

      setCartList(arr);
    } else {
      setCartList([...cartList, item]);
    }
  };
  const isInCart = (id) => {
    let prod = cartList.find((prod) => prod.id == id);
    if (prod == undefined) return false;
    return prod;
  };
  const vaciarCarrito = () => {
    setCartList([])

  };
  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id != id))

  };
  const totalPrice = () => {
    let sumaT = 0;
    cartList.forEach((item) => {
      sumaT += item.precio * item.cantidad;
    });
    return sumaT;
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, vaciarCarrito, removeItem, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
