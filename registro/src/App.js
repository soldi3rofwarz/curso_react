import React , {Fragment, useState, useEffect}from 'react';
import Formulario from './components/Formulario';
import Cita from './components/citas';


function App() {
  // LOCALSTORAGE SOLO GUARDA STRING 
  let citaslocal = JSON.parse(localStorage.getItem('citas')); //JSON.PARSE CONVIERTE A STRING
  if (!citaslocal){
    citaslocal = []
  }

  const [citamain, guardarCitamain]= useState(citaslocal)

  useEffect(()=>{
    if(citaslocal){
      localStorage.setItem('citas', JSON.stringify(citamain))
    }
    else
    {
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citamain, citaslocal]) //el arreglo vacio sirve para que solo haga un cilo, sirve para definir ciclos e apis

  const crearCita = citas =>{
    guardarCitamain([
      ...citamain,
      citas
    ])
  }

  const eliminarcita =(id)=>{
    const elimina = citamain.filter(citas => citas.id !== id )
    guardarCitamain(elimina);
  }

  // mesaje de no hay citas
  const titulo = citamain.length===0 ? 'No hay citas': 'administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
            crearCita= {crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citamain.map(citas=>(
              <Cita
              key = {citas.id}
              citas= {citas}
              eliminarcita={eliminarcita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
