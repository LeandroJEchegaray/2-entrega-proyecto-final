
import Cart from '../CartWidget/CartWidget.js';
import { Link } from "react-router-dom";
import logo from './logo1.png'
import './nav.scss'
import { CartContext } from '../../context/CartContext';
import { useContext} from 'react';
import Categories from '../../routes/Categories';

const NavBar = () => {
    const {cartLenght} = useContext(CartContext);
    return (
        
        <div>
        <nav className="navbar navbar-light navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">

                <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-middle"/>
                OPTIX
                
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to={'/Products'} className="nav-link">Products</Link>
                        </li>
                        
                    </ul>
                    <Link to={'/Cart'} className="cart-img-container"><Cart className="cart"/><span className='cart-text'>{cartLenght}</span></Link>
                </div>
            </div>
        </nav>
        <Categories></Categories>

    </div>

)

}

export default NavBar; 