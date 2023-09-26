import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

import './reservaForm.css';

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
            <div className='container-form'>
                <form onSubmit = {onCreateStore} className='main-form'>
                    <label className='label-form'>Nombre y apellido</label>
                    <input className='input-form' type="text" value={name} onChange={ (e) => setName(e.target.value) }/>
                    
                    <label className='label-form'>Personas</label>
                    <input className='input-form' type="number" value={diners} onChange={ (e) => setDiners(e.target.value) }/>
                    
                    <label className='label-form'>fecha</label>
                    <input className='input-form' type="date" value={date} onChange={ (e) => setDate(e.target.value) }/>
                    
                    <label className='label-form'>Teléfono</label>
                    <input className='input-form' type="text" value={phone} onChange={ (e) => setPhone(e.target.value) }/>
                    
                    <button id='form-button' type='submit'>Reservar</button>
                </form>

                <img id='form-img' src="assets/imgs/comensales-hamburgueseria.jpg" alt="comensales"/>
            </div>
        </>
    );
};