import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ setSelectItem }) {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  useEffect(() => {
    fetch("apis/productos.json")
      .then((resp) => resp.json())
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
        <ItemList prods={prods} setSelectItem={setSelectItem}></ItemList>
      )}
    </div>
  );
}
