import React, {useState, useEffect} from 'react';
import Preguntas from './components/pregunta';
import Formulario from './components/Formulario';
import Listado from './components/listado'
import Controlpres from './components/ControlComp'



function App() {

  const [presupuesto,setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpreg, actualizarPreg] = useState(true)
  const [gasto,getGasto] =useState([])
  const [gastar, getGastar] = useState({})
  const [creargasto, gCrearGasto]= useState(false)


  useEffect(() => {
    if(creargasto){
      //agrega el nuevo presupuesto
      getGasto([
        ...gasto,
        gastar
      ])
      //resetear el presupuesto acutual
      const presRestante = restante-gastar.fcantidad
      setRestante(presRestante)

      //resetear a false
      gCrearGasto(false)
    }
  }, [gastar, creargasto,gasto,restante])


  //cuando agregamos un nuevo gasto
 


  return (
    <>
    <div className="container">
      <header>
        <h1>presupuesto</h1>
      </header>
      <div className="contenido-principal contenido">
        {/* carga condicional = es cuando solo aparece el componete que vas a utilizar, una vez 
        ocupado desaparece y aparece otro componente (esta detro del ternario, abajo)*/}
        {mostrarpreg?(
          <Preguntas
            setPresupuesto = {setPresupuesto}
            setRestante ={setRestante}
            actualizarPreg={actualizarPreg}
          />
        ) :(
          <div className="row"> 
          <div className="one-half column">
            <Formulario
            getGastar={getGastar}
            gCrearGasto={gCrearGasto}
            />
          </div>
          <div className="one-half column">
              <Listado
              gasto={gasto}
              />
              <Controlpres
              presupuesto={presupuesto}
              restante={restante}
              />
          </div>
          </div>
        )}
        
       
      </div>
    </div>
    </>
  );
}

export default App;

