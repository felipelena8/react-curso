import React, { useContext, createContext, useState, useEffect } from 'react'
const ProductosContext = createContext([])
export const useProductosContext = () => useContext(ProductosContext)

function ProductosContextProvider({ children }) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    if (!loading) fetch("/apis/productos.json")
        .then((resp) => resp.json())
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err).finally(setTimeout(() => { setLoading(false) }, 300)))


    return (
        (loading ? <h2>Cargando</h2> :
            <ProductosContext.Provider value={{ productos }}>
                {children}
            </ProductosContext.Provider>)
    )
}

export default ProductosContextProvider