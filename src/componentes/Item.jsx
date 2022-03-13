import React from "react";
import { Link } from "react-router-dom";
export default function Item(obj) {
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
          <button className="btn btn-outline-md btnComprar">
            <i className="fas fa-shopping-cart"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
