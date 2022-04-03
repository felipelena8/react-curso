import React, { useState, createContext, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [listaCarro, setlistaCarro] = useState([]);
  const agregarAlCarro = (item) => {
    if (item.stock >= 1) {
      let prod = seEncuentra(item.id);
      if (prod) {
        let indice = listaCarro.indexOf(prod);
        let arr = [...listaCarro];
        if (listaCarro[indice].cantidad + item.cantidad <= item.stock) {
          arr[indice] = { ...item, cantidad: arr[indice].cantidad + item.cantidad };
        }
        setlistaCarro(arr);
      } else {
        setlistaCarro([...listaCarro, item]);
      }
    }

  };
  const seEncuentra = (id) => {
    let prod = listaCarro.find((prod) => prod.id === id);
    if (prod === undefined) return false;
    return prod;
  };
  const vaciarCarrito = () => {
    setlistaCarro([])

  };
  const removerItem = (id) => {
    setlistaCarro(listaCarro.filter((item) => item.id !== id))

  };
  const precioTotal = () => {
    let sumaT = 0;
    listaCarro.forEach((item) => {
      sumaT += item.precio * item.cantidad;
    });
    return sumaT;
  };

  return (
    <CartContext.Provider
      value={{ listaCarro, agregarAlCarro, vaciarCarrito, removerItem, precioTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
