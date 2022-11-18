import {CartContext} from '../../context/CartContext';
import { useContext} from 'react';

import img from '../../img/img'
let quantity = 0;
const Detail = ({ info }) => {
    const {addProductToCart} = useContext(CartContext);

    const inputChangeHandler = (ev) => {
        if (ev.target.value !== 'Cantidad') {
            quantity = ev.target.value;
        }
    }
    
    const buttonClickHandler = () => {
        if (quantity === 0 || quantity === 'Cantidad') {
        console.log("no hay cantidad seleccionada")
            console.log(info.quantity)
            alert("Debes seleccionar una cantidad para poder añadir el articulo al carrito")
        } else {
            console.log(info)
            addProductToCart({info},parseInt(quantity))
        }
    }
    
    return (
        <>
            
            <div className="d-flex justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="row">
                        <img src={info?.img} className="img-fluid"/>
                    </div>

                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 border-mid card-container">
                    <div className="row">

                        <h4 className="item-title">{info?.name}</h4>
                        <div>

                        </div>
                        <h4 className="item-title"><span>$</span>{info?.price}</h4>
                    </div>

                    <div className="row d-flex">
                        <select className="form-select" onClick={inputChangeHandler} aria-label="Default select example">
                            <option defaultValue="0">Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <button className="btn btb-primary btn-warning" onClick={buttonClickHandler}>Agregar al carrito</button>
                    </div>
                    <img src={img.coutas_envio} alt="coutas"/>
                </div>

            </div>
        </>
    )
};

export default Detail;