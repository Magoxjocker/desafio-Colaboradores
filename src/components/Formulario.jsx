import React, { useState } from 'react'
import Error from './Error';
import {generateID} from './getId'


const Formulario = ({usuarios, setUsuarios}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
   
    const handleSubmit = e => {
        e.preventDefault();

// validar datos
if([name, email].includes('')){
    setError(true)
    return
}
setError(false)

//Guardar datos de nuevos colaboradores

const objetoUsuario ={
    name,
    email,
    id: generateID(),
};
//Guardar Valores 
setUsuarios([...usuarios, objetoUsuario])

//reset input
setName('')
setEmail('')


    }
    return (
        <div>
            <h2 className='text-center bg-success rounded text-white p-2 bg-opacity-50'>Agregar Colaboradores
            <i class="fa-solid fa-user-plus p-2"></i>
            </h2>

            <form onSubmit={handleSubmit} className='p-4 bg-success text-white bg-opacity-50 rounded'>
                {error && <Error message='Todos los datos son obligatorios'/>}
                <div className='mb-4' >
                    <label htmlFor="name">Nombre:</label>
                    <input className='form-control w-50 ' id='name' type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className='mb-4'>
                    <label htmlFor="email">Email:</label>
                    <input className='form-control w-50' id='email' type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
              
                <button className='btn btn-success text-white'>Agregar Colaborador</button>
            </form>
        </div>
    );
};

export default Formulario;