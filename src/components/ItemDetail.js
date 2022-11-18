import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetail = ({ id }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    getDoc(itemRef).then((snapshot) =>
      setProduct({ id: snapshot.id, ...snapshot.data() })
    );
  }, [id]);

  return (
    <div>
      {!product ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {product.title} - {product.price}€
        </div>
      )}
    </div>
  );
};

export default ItemDetail;