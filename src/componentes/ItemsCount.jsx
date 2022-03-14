import React, { useState, useEffect } from "react";

export default function ItemsCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count !== stock) {
      setCount(count + 1);
    }
  };
  const decrementar = () => {
    if (count !== initial) {
      setCount(count - 1);
    }
  };
  return (
    <div className="itemCount">
      <div className="contador col-12">
        <button className="decrementar" onClick={() => decrementar()}>
          -
        </button>
        <div>{count}</div>
        <button className="incrementar" onClick={() => onAdd()}>
          +
        </button>
      </div>
      <button className="btn btn-outline-md btnComprar">
        <i className="fas fa-shopping-cart"></i> Agregar
      </button>
    </div>
  );
}
