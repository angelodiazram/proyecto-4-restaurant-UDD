import { EditAdmin } from '../components/EditAdmin';
import './editPage.css';

export const EditPage = () => {
    return (        
        <div id='update-container'>
            <div className="update">
                <h2 id='h2-edit'>Actualizar datos de reserva</h2>
                <EditAdmin />
            </div>
        </div>
    );
};