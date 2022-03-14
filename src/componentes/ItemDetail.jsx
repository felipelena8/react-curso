import ItemsCount from "./ItemsCount";
import React from "react";

export default function ItemDetail({ item }) {
  const { nombre, precio, imagen, desc } = item;
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
          <ItemsCount stock={10} initial={1} />
        </div>
      </div>
    </div>
  );
}
