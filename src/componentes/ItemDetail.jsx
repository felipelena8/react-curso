import ItemsCount from "./ItemsCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartBtn = () => (
  <div className="justify-content-center d-flex">
    <Link to={"/cart"}>
      <button className="btn-azul">Termina tu compra</button>
    </Link>
  </div>
);

export default function ItemDetail({ item }) {
  const { nombre, precio, imagen, desc, stock } = item;
  const [valor, setValor] = useState(null);
  const { agregarAlCarro } = useCartContext();
  const agregarCarrito = (cant) => {
    agregarAlCarro({ ...item, cantidad: cant });
  };
  return (
    <div className="container">
      <div className="itemDetail">
        <div className="imageDetail">
          <img src={imagen} alt="" />
        </div>
        <div className="bodyDetail">
          <h3>{nombre}</h3>
          <p className="desc">{desc}</p>
          <h4>Stock: {stock}</h4>
          <p className="price">${precio}</p>
          {valor === null ? (
            <div style={{ marginTop: 100 + "px" }}>
              <ItemsCount
                stock={item.stock}
              initial={1}
                setValue={setValor}
              agregarCarrito={agregarCarrito}
            />
            </div>

          ) : (
            <CartBtn />
          )}
        </div>
      </div>
    </div>
  );
}
