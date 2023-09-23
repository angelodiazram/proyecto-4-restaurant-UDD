import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ReservaPage } from "../pages/ReservaPage";
import { ContactoPage } from "../pages/ContactoPage";
import { AdminPAge } from "../pages/AdminPage";

export const MainRoutes = () => {
    return (
        <>
           <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/reserva" element={<ReservaPage />}/>
                <Route path="/contacto" element={<ContactoPage />}/>
                <Route path="/admin" element={<AdminPAge />}/>
                <Route path="/*" element={<h2>Error 404 - Pagina no encontrada</h2>}/>
            </Routes> 
        </>
    );
};