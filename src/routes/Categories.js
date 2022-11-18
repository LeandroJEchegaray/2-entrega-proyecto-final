
import { Link } from "react-router-dom";

const Categories = () => {

    return (
    <>
        <div>
            <Link className="btn btn-hover" to={'./Products'} >Productos</Link>
            <Link className="btn btn-hover" to= {'./Products/Sun'}>Summer</Link>
            <Link className="btn btn-hover" to={'./Products/Glasses'}>Armazones</Link>
        </div>
    </>)    
}
export default Categories;
