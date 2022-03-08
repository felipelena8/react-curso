import React from "react";

export default function Item(obj) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={"images/productos/" + obj.imagen} alt="" />
      </div>
      <div className="cardBody">
        <div className="price">${obj.precio}</div>
        <div className="nombreProd">{obj.nombre}</div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-md btnComprar">
            <i className="fas fa-shopping-cart"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
