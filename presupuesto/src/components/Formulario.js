import React, {useState} from 'react';
import Error from './Error'
import Shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({getGastar,gCrearGasto}) => {

    const[nombre, guardarNombre] = useState("");
    const[fcantidad, fGuardarCatidad] = useState(0);
    const [fError, fGetError] = useState(false);


    const agregarGasto=e=>{
        e.preventDefault()

        if (fcantidad <1 || isNaN(fcantidad)|| nombre.trim()===''){ // isNaN()-- valida en caso de que el usuario meta algo diferente a numeros
            fGetError(true)
            return;
        }
        fGetError(false)

    
    //construir el gasto-- con un objeto
    const fgasto ={
        nombre,
        fcantidad,
        id: Shortid.generate(),
    }

    //pasar el gasto al componente principal
    getGastar(fgasto);
    gCrearGasto(true)

    //resetear los inputs
    guardarNombre("")
    fGuardarCatidad(0)

    console.log(fgasto)
    }
    return (
        <form
            onSubmit={agregarGasto}
        >

            <h2>Agrega tus gastos</h2>
            {fError? (<Error mensaje="Ambos campos son oligatorios"/>):(null)}
            <div className="campo">
                <label>Nombre del gasto </label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="ej. transporte"
                    value={nombre}
                    onChange={e=>guardarNombre (e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto </label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="ej. 300"
                    value={fcantidad}
                    onChange={e=>fGuardarCatidad(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type= "submit"
                className= "button-primary u-full-width"
                value="agregar gasto"
            />
        </form>
    );
}
Formulario.propTypes={
    getGastar : PropTypes.func.isRequired,
    gCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;