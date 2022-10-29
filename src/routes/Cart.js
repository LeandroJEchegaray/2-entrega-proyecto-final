import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import './cart.scss'
const Cart = () => {
    const { cart, deleteAllProducts, deleteProduct } = useContext(CartContext);
 
    const total = cart.reduce((acc, product)=> acc += product.info.price * product.quantity,0)
    
    return (
        <div>
            <div className='cart-container'>
                {cart.map((product) =>
                    
                    <div className='cart-card card'>
                        <button className="card-button-remove btn-danger btn" onClick={() => deleteProduct(product.info.id)}>X</button>
                        <div key={product.info.id} className="d-flex">
                            <img src={product.info.img} className="card-img" alt={product.info.img} />
                            <div className='card-title-container'>
                                <h5 className='card-title'>
                                    {product.info.name}
                                </h5>
                                <div className='card-title'>$<span>{product.info.price * product.quantity}</span></div>
                                <div className='card-title'>cantidad: {product.quantity}</div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>

                )}
                <div>Total: ${total}</div>
                <div className='card-buttons'>

                    <button onClick={deleteAllProducts} className="btn btn-danger card-button">Vaciar carrito</button>
                    <button className="btn btn-warning card-button" onClick={deleteAllProducts}>Confirmar compra</button>
                </div>
            </div>
        </div>
    )

}

export default Cart;