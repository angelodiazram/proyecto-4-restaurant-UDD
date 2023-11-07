
export const CrudForm = ({ submit, name, diners, date, phone, setName, setDiners, setDate, setPhone, button }) => {
    return (
        <>
            <form onSubmit = {submit} className='main-form'>
                <label className='label-form'>Nombre y apellido</label>
                <input className='input-form' type="text" value={name} onChange={ (e) => setName(e.target.value) } required/>
                
                <label className='label-form'>Personas</label>
                <input className='input-form' type="number" value={diners} onChange={ (e) => setDiners(e.target.value) }required/>
                
                <label className='label-form'>fecha</label>
                <input className='input-form' type="date" value={date} onChange={ (e) => setDate(e.target.value) }required/>
                
                <label className='label-form'>Teléfono</label>
                <input className='input-form' type="text" value={phone} onChange={ (e) => setPhone(e.target.value) }required/>
                
                <button id='form-button' type='submit'>{button}</button>
            </form>
        </>
    );
};