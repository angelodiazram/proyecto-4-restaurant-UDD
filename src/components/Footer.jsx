import { faInstagram, faSquareFacebook, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './footer.css';

export const Footer = () => {
    return (
        <>
            <footer id="main-footer">
                <div className="footer-logo">
                    <img src="/assets/imgs/hamburguesa-logo.png" alt="Logo"/>
                    <h3>D`Angelo Hamburguers</h3>
                </div>
                <div className="contacto">
                    <div>
                        <h3>Mis datos</h3>
                    </div>
                    <ul className="ul-container">
                        <li className="li-datos">Angelo Díaz</li>
                        <li className="li-datos">angelodiazram@gmail.com</li>
                        <li className="li-datos">+569 98022180</li>
                        <li className="li-datos">Santiago de Chile, Ñuñoa</li>
                    </ul>
                </div>
                <div className="redes-sociales">
                    <div>
                        <h3>Nuestras Redes</h3>
                    </div>
                    <ul className="ul-container">
                        <li><a className="social-icons" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a className="social-icons" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                        <li><a className="social-icons" href="https://www.tiktok.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok} /></a></li>
                        <li><a className="social-icons" href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};