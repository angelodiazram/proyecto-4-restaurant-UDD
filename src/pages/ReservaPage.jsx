import { Footer } from "../components/Footer";
import { ReservaForm } from "../components/ReservaForm";

import './reservaPage.css';

export const ReservaPage = () => {
    return (
        <>
            <div id="main-container">
                <div id="filling-box"></div>
                <p id="p-reserva">
                    ahorrate las filas !, reserva ahora mismo y asegura tu lugar en nuestro restaurant
                </p>
                <ReservaForm />
                <Footer />
            </div>
        </>
    );
};