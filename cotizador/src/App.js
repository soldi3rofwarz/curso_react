import React ,{useState}from 'react';
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Resumen from './Components/resumen'
import Resultado from './Components/resultado'
import Spinner from './Components/Spinner'
import styled from '@emotion/styled'

const Contenedor = styled.div`
max-width: 600px;
margin:0 auto;
`
const ContenedorForm = styled.div`
background-color: #fff;
padding: 3rem;
`

const App = () => {

  const [resumen, getResumen] = useState({
    cotizacion: 0,
    datos:{
      marcas: '',
      year: '',
      plan:''
    }
  })

  const [cargando, funcCargando] = useState(false)

  //extraer datos 
  const {cotizacion,datos }= resumen;
  return (  
  <Contenedor>
      <Header
      titulo ='Cotizacion de vehiculos'
    />

    <ContenedorForm>
      <Formulario
        getResumen = {getResumen}  
        funcCargando= {funcCargando}
      />
      {cargando? <Spinner/>: null}
      
      <Resumen
        datos ={datos}
      />
      {cargando? <Resultado
        cotizacion = {cotizacion}
      />:null}
      
    </ContenedorForm>

  </Contenedor>
  );
}
 
export default App;