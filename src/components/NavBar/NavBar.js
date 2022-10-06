
import Cart from '../CartWidget/CartWidget.js';
import { Link } from "react-router-dom";


const NavBar = () => (
    
    <div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link> 
            </li> 

            <li>
            <Link to={'/Games'}>Products</Link>
            </li>

            <li>
            <Link to={'/Cart'}><Cart/></Link>
            </li>

        </ul>
        
    </div>

)


export default NavBar; 