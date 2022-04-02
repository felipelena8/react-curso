import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext";

export default function CartCard({ props }) {
  const { precio, nombre, imagen, id, cantidad } = props;
  const { removerItem } = useCartContext();
  return (
    <div className="cardCart">
      <div className="cardImgCart">
        <Link to={`item/${id}`}>
          <img src={imagen} alt="" />
        </Link>
      </div>
      <div className="cardBodyCart">
        <div className="nombreCart">{nombre + ` (${cantidad})`}</div>
        <div className="precioCart">${precio}</div>
        <div className="delCardCart" id='deleteCart' onClick={() => removerItem(id)}>
          Eliminar producto
        </div>
      </div>
    </div>
  );
}
