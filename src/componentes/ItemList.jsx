import React from "react";
import Item from "./Item";

export default function ItemList({ prods }) {
  return prods.map((prod) => (
    <Item
      key={prod.id}
      id={prod.id}
      nombre={prod.nombre}
      precio={prod.precio}
      imagen={prod.imagen}
      stock={prod.stock}
    />
  ));
}
