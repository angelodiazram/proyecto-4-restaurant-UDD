import { Route, Routes } from "react-router-dom";
import { HomePage, MenuPage, AdminPage, ReservaPage} from '../pages/indexPage';
import { EditPage } from "../pages/EditPage";

export const MainRoutes = () => {
    return (
        <>
           <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/menu" element={<MenuPage />}/>
                <Route path="/reserva" element={<ReservaPage />}/>
                <Route path="/admin" element={<AdminPage />}/>
                <Route path="admin/edit/:id" element={<EditPage />}/>
                <Route path="/*" element={<h2>Error 404 - Pagina no encontrada</h2>}/>
            </Routes> 
        </>
    );
};