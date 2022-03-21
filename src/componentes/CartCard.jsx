import React from "react";
import { useCartContext } from "../context/CartContext";

export default function CartCard({ props }) {
  const { precio, nombre, imagen, id, cantidad } = props;
  const { removeItem } = useCartContext();
  return (
    <div className="cardCart">
      <div className="cardImgCart">
        <img src={imagen} alt="" />
      </div>
      <div className="cardBodyCart">
        <div className="nombreCart">{nombre + ` (${cantidad})`}</div>
        <div className="precioCart">${precio}</div>
        <div className="delCardCart" onClick={() => removeItem(id)}>
          Eliminar producto
        </div>
      </div>
    </div>
  );
}
