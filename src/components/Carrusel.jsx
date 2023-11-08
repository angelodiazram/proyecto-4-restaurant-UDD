
import './carrusel.css'

export const Carrusel = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/imgs/hamburguesa-carrusel-1.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Ingredientes Frescos</h5>
                            <p>Seleccionamos minuciosamente ingredientes de la más alta calidad</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/imgs/hamburguesa-carrusel-2.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hamburguesas Deliciosas</h5>
                            <p>Cada hamburguesa es una obra maestra de sabor</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/imgs/hamburguesa-carrusel-3.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Tradición Familiar</h5>
                            <p>Creando un legado de sabor y calidad de generación en generación</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};