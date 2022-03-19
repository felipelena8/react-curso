import ItemsCount from "./ItemsCount";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartBtn = () => (
  <div className="justify-content-center d-flex">
    <Link to={"/cart"}>
      <button className="btn-azul">Termina tu compra</button>
    </Link>
  </div>
);

export default function ItemDetail({ item }) {
  const { nombre, precio, imagen, desc } = item;
  const [value, setValue] = useState(null);

  return (
    <div className="container">
      <div className="itemDetail">
        <div className="imageDetail">
          <img src={imagen} alt="" />
        </div>
        <div className="bodyDetail">
          <h3>{nombre}</h3>
          <p className="desc">{desc}</p>
          <p className="price">${precio}</p>
          {value === null ? (
            <ItemsCount stock={10} initial={1} setValue={setValue} />
          ) : (
            <CartBtn />
          )}
        </div>
      </div>
    </div>
  );
}
