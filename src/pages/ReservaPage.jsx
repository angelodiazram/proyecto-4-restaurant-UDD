import { Footer } from "../components/Footer";
import { ReservaForm } from "../components/ReservaForm";
import '../components/reservaPage.css';

export const ReservaPage = () => {
    return (
        <>
            <h2 id="reserva-h2">Reserva page</h2>
            <ReservaForm />
            <Footer />
        </>
    );
};