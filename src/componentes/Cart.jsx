import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc, query, getDocs, where, documentId, writeBatch } from "firebase/firestore"
import FormCompra from "./FormCompra";
const CardCart = ({ prod }) => {
  const { removerItem } = useCartContext();
  return (
    <div className="cartBuy">
      <div className="cartBuyImagen">
        <img src={prod.imagen} alt="" />
      </div>
      <div className="deleteNombre">
        <p className="nombreCart">{`${prod.nombre} (${prod.cantidad})`}</p>
        <button className="btnDelete" onClick={() => removerItem(prod.id)}>
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
  async function generarOrden(orden) {
    const db = getFirestore()
    const batch = writeBatch(db)
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden).then(({ id }) => setOrdenCompra(id))
    const queryCollectionItems = collection(db, 'items')
    const queryActualizarStock = query(queryCollectionItems, where(documentId(), 'in', listaCarro.map(it => it.id)))
    await getDocs(queryActualizarStock).then(resp => resp.docs.forEach(prod => batch.update(prod.ref, { stock: prod.data().stock - listaCarro.find(item => item.id === prod.id).cantidad })))
    batch.commit()
  }
  const [mostrar, setMostrar] = useState(false)
  const [ordenCompra, setOrdenCompra] = useState('')
  const { listaCarro, vaciarCarrito, precioTotal } = useCartContext();
  const total = precioTotal();
  const items = { items: listaCarro.map(prod => { return { id: prod.id, title: prod.nombre, price: prod.precio } }), total: total }

  let cantProductos = 0
  return (
    <>
    <div className="contenedorCarro">
        {listaCarro.length ? <><div className="contenedor">
        <div className="contenedorCards">
            {listaCarro.map((prod) => {
              cantProductos += prod.cantidad; return (
                <CardCart prod={prod} key={prod.id} />
            )
          })}
        </div>
      </div>
          <div className="carroFooter">
            <div className="contenedorDetalles">
              <div className="cartDesc">
                <div className="productos">
                  Productos <span>{cantProductos}</span>{" "}
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
                <button className="btnCart" onClick={() => { window.scrollTo(0, 0); setMostrar(true) }}>Finalizar compra</button>
              </div>
            </div>
        </div></> : <div>
        <h2>No hay elementos en el carrito</h2>
          <Link to={"/"}><button className="btn">Volver al catalogo</button></Link>
        </div>}
    </div>
      <FormCompra mostrar={mostrar} setMostrar={setMostrar} generarOrden={generarOrden} items={items} ordenCompra={ordenCompra} />
    </>
  );
}

export default Cart;
