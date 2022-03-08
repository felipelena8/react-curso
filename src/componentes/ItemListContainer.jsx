import React, { useState, useEffect } from "react";
import productos from "../js/script.js";
import ItemList from "./ItemList.jsx";

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
        <ItemList prods={prods}></ItemList>
      )}
    </div>
  );
}
