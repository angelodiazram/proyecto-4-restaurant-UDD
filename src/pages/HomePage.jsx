import { Carrusel } from "../components/Carrusel";
import { Footer } from "../components/Footer";
import './homePage.css'

export const HomePage = () => {
    return (
        <>
            <header id="article-one">
                <h1>D`ANGELO HAMBURGERS</h1>
                <p>Sabor inigualable y variedad sorprendente, llevamos la cultura hamburguesera en la sangre.</p>
            </header>
            <Carrusel />
            <article id="article-two">
                <div id="article-two-container">
                    <h2>Un poco de nosotros...</h2>
                    <p>
                        Desde 1994, en Santiago de Chile, Ñuñoa D Angelo Hamburgers se ha dedicado a perfeccionar la hamburguesa, combinando la tradición y el conocimiento en la selección
                        de las mejores carnes, la mezcla perfecta de especias y la cocción precisa. Cada hamburguesa que servimos es el resultado de años de experiencia
                        y un profundo amor por ellas... Nuestra tradición va más allá de la cocina, es un compromiso con la calidad, la autenticidad y la satisfacción al cliente.
                        Te invitamos a unirte a nosotros en este viaje gastronómico y ser parte de nuestra historia hamburguesera.  
                    </p>
                    <img src="/assets/imgs/CHEF-HAMBURGERS.jpg" alt="chef-hamburgers"/>
                </div>
            </article>
            <Footer />
        </>
    );
};