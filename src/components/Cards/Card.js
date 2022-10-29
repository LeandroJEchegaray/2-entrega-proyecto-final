
import { Link } from "react-router-dom";
import { useContext} from 'react';
import './card.scss'
import {CartContext} from '../../context/CartContext'

function Cards( {info} ) {
  const {addProductToCart} = useContext(CartContext);

  const buttonClickHandler = (info) => {
    
    addProductToCart({info}, 1)
    console.log(info);
  }

  return (
    <div className="card m-1" style={{width:"18rem", height:"25rem"}} >
      <div className="card-body d-flex">
    <Link to= {`/Detail/${info.id}`}>
      <img src={info.img} className="card-img-top"/>
    </Link>
      </div>
        <span className="card-title">{info.name}</span> 
        <div><span>$</span>{info.price}</div>
        <button onClick = {()=>buttonClickHandler(info)} className="btn btb-primary btn-warning">Agregar al carrito</button>
      </div>

  );
}

export default Cards;
