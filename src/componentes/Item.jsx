import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
export default function Item(obj) {
  const { addToCart } = useCartContext();
  const agregarCarrito = () => {
    addToCart({ ...obj, cantidad: 1 });
  };
  return (
    <div className="card">
      <div className="cardImg">
        <Link to={`/item/${obj.id}`}>
          <img src={obj.imagen} alt="" />
        </Link>
      </div>
      <div className="cardBody">
        <div className="price">${obj.precio}</div>
        <div className="nombreProd">{obj.nombre}</div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-md btnComprar"
            onClick={agregarCarrito}
          >
            <i className="fas fa-shopping-cart"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
