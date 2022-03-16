import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const { cat } = useParams();
  useEffect(() => {
    fetch("/apis/productos.json")
      .then((resp) => resp.json())
      .then((resp) => {
        if (cat) {
          setProds(resp.filter((item) => item.categoria.includes(cat)));
        } else {
          setProds(resp);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      window.scrollTo(0, 0);
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
      ) : (
        <ItemList prods={prods} />
      )}
    </div>
  );
}
