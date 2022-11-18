import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail"
import Producto from "./Items";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const DetailContainer =() => {
const [info, setInfo] =useState({})
const {id}= useParams()

useEffect(() => {
    const getData = new Promise (resolve =>{
        resolve(Producto)
    });

    getData.then(res => setInfo(res.find((prod)=> prod.id === Number(id))));
},[id])

useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    getDoc(itemRef).then((snapshot) =>
      setInfo({ id: snapshot.id, ...snapshot.data() })
    );
  }, [id]);

    return( <div> <Detail info={info}/></div>
    )
}

export default DetailContainer;