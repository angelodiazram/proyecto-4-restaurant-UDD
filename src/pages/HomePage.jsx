import { Carrusel } from "../components/Carrusel";
import { Footer } from "../components/Footer";
import './homePage.css'

export const HomePage = () => {
    return (
        <>
            <article id="article-one">
                <h1>D`ANGELO HAMBURGERS</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet architecto minus modi nihil excepturi molestias, quaerat alias eaque praesentium earum.</p>
            </article>
            <Carrusel />
            <article id="article-two">
                <div className="d-flex flex-row justify-content-evenly">
                    <h2 className="d-flex align-items-center justify-content-center">Un poco de nosotros...</h2>
                    <p className="d-flex align-items-center justify-content-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed mollitia nihil nostrum tenetur nam odit atque reiciendis rerum dolor labore fuga amet impedit est sapiente magni perspiciatis similique qui molestiae non, officiis nesciunt sequi rem debitis placeat. Neque, cumque numquam.</p>
                </div>
            </article>
            <Footer />
        </>
    );
};