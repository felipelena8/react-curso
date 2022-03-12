import React from "react";
import Item from "./Item";

export default function ItemList({ prods, setSelectItem }) {
  return prods.map((prod) => (
    <Item
      key={prod.id}
      id={prod.id}
      nombre={prod.nombre}
      precio={prod.precio}
      imagen={prod.imagen}
      setSelectItem={setSelectItem}
    />
  ));
}
