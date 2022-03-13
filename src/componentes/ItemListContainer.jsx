import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const { cat } = useParams() || "productos";
  useEffect(() => {
    fetch("/apis/productos.json")
      .then((resp) => resp.json())
      .then((resp) => {
        if (cat) {
          return resp.filter((item) => item.categoria.includes(cat));
        } else {
          return resp;
        }
      })
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [cat]);
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
      ) : cat ? (
        <ItemList prods={prods}></ItemList>
      ) : (
        <ItemList prods={prods} />
      )}
    </div>
  );
}
