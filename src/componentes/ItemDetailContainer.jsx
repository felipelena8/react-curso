import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ id }) {
  const [item, setItem] = useState(null);
  const getItem = (id) => {
    fetch("apis/productos.json")
      .then((resp) => resp.json())
      .then((resp) => resp.find((itemRes) => itemRes.id == id))
      .then((resp) => {
        setItem(resp);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getItem(id);
  }, []);
  return (
    <div>
      {item != null ? <ItemDetail item={item} /> : <div>No hay item</div>}
    </div>
  );
}
