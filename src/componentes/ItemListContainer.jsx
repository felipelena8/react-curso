import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { doc, getDoc, getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  const { cat } = useParams();
  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryFilter = cat ? query(queryCollection, where('categoria', 'array-contains', String(cat))) : queryCollection
    getDocs(queryFilter).then(resp => setProds(resp.docs.map(producto => ({ id: producto.id, ...producto.data() })))).finally(setTimeout(() => setLoading(false), 500))
    window.scrollTo(0, 0);
  }, [cat]);
  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {loading ? (
        <div className="loading">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <ItemList prods={prods} />
      )}
    </div>
  );
} //const db = getFirestore()
//const queryDoc = doc(db, 'items', 'Th35pjlYfFucI3HBJVCA')
    //getDoc(queryDoc).then(resp => setProd({ id: resp.id, ...resp.data() }))
