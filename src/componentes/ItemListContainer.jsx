import React from "react";
import Card from "./Card";
import productos from "../js/modelo.js";

export default function ItemListContainer() {
  const htmlProds = [];
  const urlBase = "/images/productos/";
  for (let prod of productos) {
    htmlProds.push(
      <Card
        id={prod.id}
        nombre={prod.nombre}
        precio={prod.precio}
        imagen={urlBase + prod.imagen}
      />
    );
  }
  console.log(htmlProds);

  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {htmlProds}
    </div>
  );
}
