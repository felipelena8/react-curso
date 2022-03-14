import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const getItem = (id) => {
    fetch("/apis/productos.json")
      .then((resp) => resp.json())
      .then((resp) => resp.find((itemRes) => itemRes.id == id))
      .then((resp) => {
        setTimeout(() => setItem(resp), 2000);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getItem(id);
  }, [id]);
  return (
    <div>
      {item != null ? (
        <ItemDetail item={item} />
      ) : (
        <div className="loading">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
