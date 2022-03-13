import React from "react";

export default function ItemDetail({ item }) {
  const { nombre, precio, imagen } = item;
  return (
    <div className="itemDetail">
      <div className="imageDetail">
        <img src={imagen} alt="" />
      </div>
      <div className="bodyDetail">
        <h3>{nombre}</h3>
        <p>{precio}</p>
        <button className="btn btn-outline-md btnComprar">
          <i className="fas fa-shopping-cart"></i> Agregar
        </button>
      </div>
    </div>
  );
}
