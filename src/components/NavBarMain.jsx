import { NavLink } from "react-bootstrap";

export const NavBarMain = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" href="#">Restaurant App</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" href="#">Inicio</NavLink>
                            <NavLink className="nav-link" href="#">Quiénes Somos</NavLink>
                            <NavLink className="nav-link" href="#">Carta</NavLink>
                            <NavLink className="nav-link" href="#">Haz tu pedido</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
