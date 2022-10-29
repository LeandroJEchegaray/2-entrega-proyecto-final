import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "./Detail"
import Producto from "./Items";

const DetailContainer =() => {
const [info, setInfo] =useState({})
const {id}= useParams()

useEffect(() => {
    const getData = new Promise (resolve =>{
        resolve(Producto)
    });

    getData.then(res => setInfo(res.find((prod)=> prod.id === Number(id))));
},[id])

    return( <div> <Detail info={info}/></div>
    )
}

export default DetailContainer;