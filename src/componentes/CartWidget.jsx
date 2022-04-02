import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartCard from "./CartCard";
export default function CartWidget() {
  const { listaCarro, vaciarCarrito, precioTotal } = useCartContext();
  const [mostrar, setMostrar] = useState(false);
  const total = precioTotal();
  const history = useNavigate();
  function clickAfuera(e) {
    setMostrar(false)
  }
  useEffect(() => {
    document.addEventListener('click', clickAfuera)
    return () => {
      document.removeEventListener('click', clickAfuera)
    }
  })
  useEffect(() => { if (!listaCarro.length) setMostrar(false) }, [listaCarro])
  return (
    <div className="containerCart" onClick={e => e.stopPropagation()}>
      {listaCarro.length ? <><i
        className="fas fa-cart-arrow-down fa-2x cart"
        onClick={() => setMostrar(!mostrar)} id={'logoCart'}
      ><div className="counterCart">{listaCarro.length}</div></i>
        <div id='desplegableCarro'
          className={
            listaCarro.length && mostrar ? "listaCart" : "listaCart d-none"
          }
        >
          <div className="cartBody">
            <div className="containerCartItems ">
              {listaCarro.map((item) => (
                <CartCard props={item} key={item.id} />
              ))}
            </div>
          </div>
          <div className="cartFooter">
            <h4 className="precioTotal">Total: ${total}</h4>
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
