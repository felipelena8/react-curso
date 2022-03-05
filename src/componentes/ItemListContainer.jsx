import React, { useEffect, useState } from "react";
import Card from "./Card";
import productos from "../js/modelo.js";
import { Toast } from "bootstrap";

const task = new Promise((resolve, reject) => {
  let condicion = true;
  if (condicion) {
    setTimeout(() => resolve(productos), 2000);
  } else {
    reject("400 - not found");
  }
});

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const urlBase = "/images/productos/";
  useEffect(() => {
    task
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {loading ? (
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
      ) : (
        prods.map((prod, index) => (
          <Card
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            imagen={urlBase + prod.imagen}
          />
        ))
      )}
    </div>
  );
}
