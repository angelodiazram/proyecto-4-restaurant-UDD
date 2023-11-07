import { GetReservas } from '../components/GetReservas';
import './adminPage.css'

export const AdminPage = () => {
    return (
        <>
            <h2 id='h2-admin'>Admin Page</h2>
            <p id='p-admin'>Como Administrador puedes visualizar la información ingresada por los clientes de tu restaurant</p>
            <GetReservas />
        </>
    );
};