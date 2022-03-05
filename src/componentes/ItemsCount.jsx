import React, { useState, useEffect } from "react";

export default function ItemsCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count !== stock) {
      setCount(count + 1);
    }
  };
  const decrementar = () => {
    if (count !== 0) {
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
        <button className="incrementar" onClick={() => incrementar()}>
          +
        </button>
      </div>
      <div className="col-12">
        <button className="addCart">Agregar al carrito</button>
      </div>
    </div>
  );
}
