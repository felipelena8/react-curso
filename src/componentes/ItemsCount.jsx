import React, { useState } from "react";

export default function ItemsCount({ stock, initial, setValue }) {
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
          <i className="fas fa-solid fa-minus"></i>
        </button>
        <div>
          <span>{count}</span>
        </div>
        <button className="incrementar" onClick={() => onAdd()}>
          <i className="fas fa-solid fa-plus"></i>
        </button>
      </div>
      <button
        className="btn btn-outline-md btnComprar"
        onClick={() => setValue(count)}
      >
        <i className="fas fa-shopping-cart"></i> Agregar
      </button>
    </div>
  );
}
