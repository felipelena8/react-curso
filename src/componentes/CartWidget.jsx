import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartCard from "./CartCard";



export default function CartWidget() {
  const { cartList, vaciarCarrito, totalPrice } = useCartContext();
  const [mostrar, setMostrar] = useState(false);
  const total = totalPrice();
  const history = useNavigate();
  const listaCart = document.getElementById('desplegableCarro')

  function clickAfuera(e) {
    if ((cartList.length != 0) && !(['deleteCart', 'logoCart', 'vaciarCarro'].includes(e.target.id) || listaCart.contains(e.target))) {
      setMostrar(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', clickAfuera)
    return () => {
      document.removeEventListener('click', clickAfuera)
    }
  })
  useEffect(() => { if (!cartList.length) setMostrar(false) }, [cartList])
  return (
    <div className="containerCart">
      {cartList.length ? <><i
        className="fas fa-cart-arrow-down fa-2x cart"
        onClick={() => setMostrar(!mostrar)} id={'logoCart'}
      ><div className="counterCart">{cartList.length}</div></i>
        <div id='desplegableCarro'
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
              <button className="btnCart" id='vaciarCarro' onClick={vaciarCarrito}>
                Vaciar carrito
              </button>
            </div>
          </div>
        </div></> : <div id="desplegableCarro"></div>}

    </div>
  );
}
