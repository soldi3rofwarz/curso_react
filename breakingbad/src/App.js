import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column; 
`
const Boton = styled.button`
  background: --webkit-linear-gradient(top left,#007d35 0%,#007d35 40%, #0f574e 100%);
  background-size: 300px;
  color: #000;
  margin-top: 3rem;
  padding:1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`
  //no es necesario poner llaves ni return a un aroow function cuando es solo una accion

function App() {

  const [frase, guardarfrase]= useState({})
  
  const Consultar = async ()=>{ //async detiene la funcion para esperar
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      const frase = await api.json() // a que las variables con await retornen un valor/ promesa
      guardarfrase(frase[0]) //[0] es porque la api devuelve solo un valor a la vez
      
    }

    useEffect(()=>{
      Consultar()
    },[])

  return (
    <Contenedor>
      <Frase
        frase = {frase}
      />
      <Boton onClick={Consultar}>Cambiar frase</Boton>
    </Contenedor>
    
  );
}

export default App;
