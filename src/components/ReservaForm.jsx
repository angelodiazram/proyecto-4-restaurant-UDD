import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CrudForm } from './CrudForm';

import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

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
                <CrudForm 
                    submit={onCreateStore}
                    name={name}
                    diners={diners}
                    date={date}
                    phone={phone}
                    setName={setName}
                    setDiners={setDiners}
                    setDate={setDate}
                    setPhone={setPhone}
                    button={'Reservar'}
                />

                <img id='form-img' src="assets/imgs/comensales-hamburgueseria.jpg" alt="comensales"/>
            </div>
        </>
    );
};