import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

export const ReservaForm = () => {
    
    const [ name, setName ] = useState(''); 
    const [ diners, setDiners ] = useState(''); 
    const [ date, setDate ] = useState(''); 
    const [ phone, setPhone ] = useState(''); 

    const navigate = useNavigate()
    
    const reservasCollectionRef = collection(db, 'reservas');

    const onCreateStore = async (event) => {
        event.preventDefault()
        await addDoc( reservasCollectionRef, { name, diners, date, phone } ) // {name: name, diners: diners, date: date, phone: phone}

        alert('tu reserva se hecho con exito!');
        navigate('/');
    }

    return (
        <>
            <div className='container'>
                <form onSubmit = {onCreateStore}>
                    <label className="form-label">Nombre y apellido</label>
                    <input className="form-control" type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
                    <br />
                    <label className="form-label">Personas</label>
                    <input className="form-control" type="number" value={diners} onChange={ (e) => setDiners(e.target.value) }/>
                    <br />
                    <label className="form-label">fecha</label>
                    <input className="form-control" type="date" value={date} onChange={ (e) => setDate(e.target.value) }/>
                    <br />
                    <label className="form-label">Teléfono</label>
                    <input className="form-control" type="text" value={phone} onChange={ (e) => setPhone(e.target.value) }/>
                    <br />
                    <button className='btn btn-success' type='submit'>Reservar</button>
                </form>
            </div>
        </>
    );
};