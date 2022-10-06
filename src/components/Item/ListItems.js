
import { useState, useEffect } from "react";
import ItemList from "./List";
import Producto from "./Items";


const ListItems = () => {
const [data, setData] = useState([]);


useEffect(() => {
    const getData = new Promise (resolve =>{
        resolve (Producto)
});
getData.then(res => setData(res));

}, [])
    return(
        <div>
        <ItemList data={data} />
        </div>
    )
    }

export default ListItems;