import React from "react";

export default function ItemDetail({ item }) {
  const { id, nombre, precio, imagen } = item;
  return (
    <div className="itemDetail">
      <div className="imageDetail">
        <img src={"images/productos/" + imagen} alt="" />
      </div>
      <div className="bodyDetail">
        <h3>{nombre}</h3>
        <p>{precio}</p>
      </div>
    </div>
  );
}
