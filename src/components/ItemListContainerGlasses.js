import { useEffect, useState } from "react";
import {getFirestore,
  collection,
  getDocs,
  query,
  where,} from 'firebase/firestore'
import ItemListFB from './ItemListFB'
const ItemListContainerGlasses = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
      const q = query(itemsCollection, where('category', '==', "glasses"));
      getDocs(q).then((snapshot) => {
        const arrproducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(arrproducts);
      });
    }, []);
    return (
        
        <>
        <ItemListFB data={data}></ItemListFB>
        </>
    )
}
export default ItemListContainerGlasses;