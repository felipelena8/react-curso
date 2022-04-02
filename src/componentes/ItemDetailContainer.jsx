import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, 'items', id)
    getDoc(queryDoc).then(resp => setItem({ id: resp.id, ...resp.data() })) 
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div>
      {item != null ? (
        <ItemDetail item={item} />
      ) : (
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
      )}
    </div>
  );
}
