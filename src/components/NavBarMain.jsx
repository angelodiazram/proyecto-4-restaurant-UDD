import { NavLink } from "react-router-dom";
import './navBarMain.css'

export const NavBarMain = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg border-body fixed-top" data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-start">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/assets/imgs/hamburguesa-logo.png" alt="logo" id="logo"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            <NavLink className="nav-link" to="/menu">Menú</NavLink>
                            <NavLink className="nav-link" to="/reserva">Reserva</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
