import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const deleteReserva = async (id) => {
    const reservaDoc = doc(db, 'reservas', id);
    await deleteDoc(reservaDoc);
}

export const confirmDeleteReserva = (id) => {
    MySwal.fire({
        title: "¿Está seguro de realizar esta operación?",
        text: "No se podrá revertir la eliminación",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            
            deleteReserva(id)

            Swal.fire({
                title: "Reserva eliminada",
                text: "La reserva ha sido eliminada con exito",
                icon: "success"
            });
        }
    });
}