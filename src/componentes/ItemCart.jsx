import React from 'react'
import { useCartContext } from "../context/CartContext";

const ItemCart = ({ prod }) => {
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

export default ItemCart
