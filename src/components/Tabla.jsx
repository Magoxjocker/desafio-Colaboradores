import React from 'react'
import Tablerow from './Tablerow'

const Tabla = ({usuarios}) => {
    return (
        <div>

            <h2 className='text-center mt-4 bg-success p-2 text-white rounded'>Lista de Colaboradores</h2>

            <table className='table table-striped table-hover mt-5 shadow-lg text-center'>
                <thead className='bg-success text-white '>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {usuarios.map(user => <Tablerow user={user} />)}
                </tbody>
            </table>

        </div>
    )
}

export default Tabla