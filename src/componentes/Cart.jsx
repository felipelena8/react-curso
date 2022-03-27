import React from "react";
import { useCartContext } from "../context/CartContext";

const CardCart = ({ prod }) => {
  const { removeItem } = useCartContext();
  return (
    <div className="cartBuy">
      <div className="cartBuyImagen">
        <img src={prod.imagen} alt="" />
      </div>
      <div className="deleteNombre">
        <p className="nombreCart">{`${prod.nombre} (${prod.cantidad})`}</p>
        <button className="btnDelete" onClick={() => removeItem(prod.id)}>
          Eliminar
        </button>
      </div>
      <div className="price">
        <div>${prod.precio}</div>
      </div>
    </div>
  );
};

function Cart() {
  const { cartList, vaciarCarrito, totalPrice } = useCartContext();
  const total = totalPrice();
  let productos = 0
  return (
    <div className="contenedorCarro">
      <div className="contenedor">
        <div className="contenedorCards">
          {cartList.map((card) => {
            productos += card.cantidad; return (
            <CardCart prod={card} key={card.id} />
            )
          })}
        </div>
      </div>

      <div className="carroFooter">
        <div className="contenedorDetalles">
          <div className="cartDesc">
            <div className="productos">
              Productos <span>{productos}</span>{" "}
            </div>
            <div className="subtotal">
              Subtotal <span>${total}</span>{" "}
            </div>
            <div className="total">
              Total <span>${total}</span>
            </div>
          </div>
          <div className="end">
            <button className="btnCart" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <button className="btnCart">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
