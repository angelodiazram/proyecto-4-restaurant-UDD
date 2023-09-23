import { useEffect, useState } from "react";

import { collection, getDocs } from 'firebase/firestore'
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

import './getReservas.css'

export const GetReservas = () => {
    
    const [ reservas, setReservas ] = useState([]);

    const reservaCollectionRef = collection(db, 'reservas')

    const getReservas = async() => {
        const data = await getDocs(reservaCollectionRef);

        setReservas(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        )
    }

    useEffect(() => {
        getReservas()
    }, [])
    
    
    
    
    return (
        <>
            <h2>Get Reservas</h2>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <Link to='/admin' className="btn btn-success my-2 p-2">
                                Crear reserva
                            </Link>
                        </div>

                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Comensales</th>
                                    <th>Fecha de reserva</th>
                                    <th>Teléfono</th>
                                    <th>Aciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    reservas.map(reserva => (
                                        <tr key={reserva.id}>
                                            <td>{reserva.name}</td>
                                            <td>{reserva.diners}</td>
                                            <td>{reserva.date}</td>
                                            <td>{reserva.phone}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};