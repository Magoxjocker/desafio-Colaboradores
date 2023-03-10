import { useState } from 'react';
import './App.css'
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import { colaboradores } from './db';

function App() {
const [usuarios, setUsuarios] = useState(colaboradores)
const[palabra, setPalabra] = useState('')
 
return (
    <div className='container'>
      <h1 className='text-center bg-success p-2 text-white rounded mt-2'>Base de datos de Colaboradores</h1>
      <Formulario usuarios={usuarios} setUsuarios={setUsuarios}/>
      <hr/>
      <Buscador usuarios={usuarios} setUsuarios={setUsuarios} palabra={palabra} setPalabra={setPalabra}/>
      <hr/>
      <Tabla usuarios={usuarios} palabra={palabra}/>
    </div>
  )
}

export default App;
