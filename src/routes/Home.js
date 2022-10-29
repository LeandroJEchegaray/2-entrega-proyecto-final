

import img from '../img/img'
import './home.scss'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <main>
                <Link to={'./products'}>
                <div id="carouselExampleFade" className="carousel slide carousel-fade hero m-md-3 overflow-hidden " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active hero-img">
                            <img src={img.banner_rusty} className="hero-img" alt="..."/>
                        </div>
                        <div className="carousel-item hero-img">
                            <img src={img.banner_polo} className="hero-img" alt="..."/>
                        </div>
                        <div className="carousel-item hero-img">
                            <img src={img.banner_rayban} className="hero-img" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                </Link>
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center background-custom">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 fw-normal">SUMMER SALE</h1>
                        <p className="lead fw-normal">¡Las mejores ofertas para el verano!</p>
                        <Link to={'./products'}className="btn btn-danger" >Ver productos</Link>
                    </div>

                </div>
            </main>
            
        </>

    );
}
export default Home;    