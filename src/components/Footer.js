import 'boxicons'

const Footer = () => {
    return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center w-100 py-4 border-top bg-light">
                <div className="col-md-4 d-flex align-items-center">
                    
                    <box-icon name='twitter' type='logo' color='#ffffff' ></box-icon>
                  
                    <span className="text-muted">© 2022 OPTIX</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><span className="text-muted btn"><box-icon name='facebook-square' type='logo' color='#303030' ></box-icon></span></li>
                    <li className="ms-3"><span className="text-muted btn"><box-icon name='instagram-alt' type='logo' color='#303030' ></box-icon></span></li>
                    <li className="ms-3"><span className="text-muted btn"><box-icon name='twitter' type='logo' color='#303030' ></box-icon></span></li>
                </ul>
            </footer>
    )
}
export default Footer;