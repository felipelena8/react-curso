import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartCard from "./CartCard";



export default function CartWidget() {
  const { cartList, vaciarCarrito, totalPrice } = useCartContext();
  const [mostrar, setMostrar] = useState(false);
  const total = totalPrice();
  const history = useNavigate();
  function clickAfuera(e) {
    if (cartList.length != 0 && !(e.target.id == 'logoCart' || document.querySelector('.listaCart').contains(e.target))) {
      setMostrar(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickAfuera)
    return () => {
      document.removeEventListener('click', clickAfuera)
    }
  })
  return (
    <div className="containerCart">
      {cartList.length ? <><i
        className="fas fa-cart-arrow-down fa-2x cart"
        onClick={() => setMostrar(!mostrar)} id={'logoCart'}
      ><div className="counterCart">{cartList.length}</div></i>
      <div
        className={
          cartList.length && mostrar ? "listaCart" : "listaCart d-none"
        }
      >
        <div className="cartBody">
          <div className="containerCartItems ">
            {cartList.map((item) => (
              <CartCard props={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="cartFooter">
          <h4 className="totalPrice">Total: ${total}</h4>
          <div className="cartButtons">
            <button className="btnCart" onClick={() => history("/cart")}>
              Finalizar compra
            </button>
            <button className="btnCart" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
          </div>
        </div>
        </div></> : ''}

    </div>
  );
}
