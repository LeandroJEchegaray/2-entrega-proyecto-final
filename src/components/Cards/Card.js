import  Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Cards( {info} ) {
  return (

      <div >
  
      <img src={info.imagen}/>
        <h3>{info.name}</h3>     
        <div>
        <Link to= {`/Detail/${info.id}`}> Comprar </Link>
        </div>
      </div>

  );
}

export default Cards;