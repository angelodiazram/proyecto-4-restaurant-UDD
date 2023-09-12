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
                        <li>Angelo Díaz</li>
                        <li>angelodiazram@gmail.com</li>
                        <li>+569 98022180</li>
                        <li>Santiago de Chile, Ñuñoa</li>
                    </ul>
                </div>
                <div className="redes-sociales">
                    <div>
                        <h3>Nuestras Redes</h3>
                    </div>
                    <ul className="ul-container">
                        <li className="social-icons"><FontAwesomeIcon icon={faInstagram} /></li>
                        <li className="social-icons"><FontAwesomeIcon icon={faSquareFacebook} /></li>
                        <li className="social-icons"><FontAwesomeIcon icon={faTiktok} /></li>
                        <li className="social-icons"><FontAwesomeIcon icon={faTwitter} /></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};