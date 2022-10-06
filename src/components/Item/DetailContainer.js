import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail"
import Producto from "./Items";



const DetailContainer =() => {
const [item, setItem] =useState({})
const {id}= useParams()

useEffect(() => {
    const getData = new Promise (resolve =>{
        resolve(Producto)
    });

    getData.then(res => setItem(res.find((prod)=> prod.id === Number(id))));
},[id])

    return( <div> <Detail item={item}/><p>${item.price}</p> </div>
    )
}

export default DetailContainer;