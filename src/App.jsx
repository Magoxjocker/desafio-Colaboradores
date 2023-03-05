import { useState } from 'react';
import './App.css'
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import { colaboradores } from './db';

function App() {
const [usuarios, setUsuarios] = useState(colaboradores)
 
return (
    <div className='container'>
      <h1 className='text-center bg-success p-2 text-white rounded mt-2'>Base de datos de Colaboradores</h1>
      <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/>
      <hr/>
      <Tabla usuarios={usuarios}/>
    </div>
  )
}

export default App
