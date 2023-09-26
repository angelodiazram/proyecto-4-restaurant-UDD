import { Footer } from "../components/Footer";
import { MenuAcordeon } from "../components/MenuAcordeon";
import './menuPage.css';

export const MenuPage = () => {
    return (
        <>
            <div id="main-container">
                <div id="filling-box"></div>
                <div id="h2-container">
                    <h2 id="h2-menu">nuestro menu de hamburguesas</h2>
                </div>
                <MenuAcordeon />
                <Footer />
            </div>
        </>
    );
};