import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { CrudForm } from "./CrudForm";

export const EditAdmin = () => {
    
    const [ name, setName ] = useState(''); 
    const [ diners, setDiners ] = useState(''); 
    const [ date, setDate ] = useState(''); 
    const [ phone, setPhone ] = useState('');
    
    const { id } = useParams();
    const navigate = useNavigate();

    const updateReserva = async(id) => {
        const user = await getDoc(doc(db, 'reservas', id));

        if (!user.exists()) {
            console.log('No se encontro el documento')
        } else {
            setName(user.data().name);
            setDiners(user.data().diners);
            setDate(user.data().date);
            setPhone(user.data().phone);
        }
    }

    const onUpdate = async (event) => {
        event.preventDefault();
        const user = doc(db, 'reservas', id);
        const data = {
            name,
            diners,
            date,
            phone
        }

        await updateDoc(user, data);
        navigate('/admin');
    }

    useEffect(() => {
        updateReserva(id)
    }, []);


    return (
        <>
            <div className='container-form'>
                <CrudForm 
                    submit={onUpdate}
                    name={name}
                    diners={diners}
                    date={date}
                    phone={phone}
                    setName={setName}
                    setDiners={setDiners}
                    setDate={setDate}
                    setPhone={setPhone}
                    button={'Actualizar'}
                />
            </div>
        </>
    );
};          


