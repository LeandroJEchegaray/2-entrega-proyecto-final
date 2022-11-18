import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import ItemListFB from './ItemListFB'
const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    getDocs(itemsCollection).then((snapshot) => {
      const arrproducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(arrproducts);
    });
  }, []);
  return (
    <div className="d-flex flex-wrap">
        <ItemListFB data={data}></ItemListFB>
        </div>
  );
};

export default ItemList;
