import React,{Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({setPresupuesto,setRestante, actualizarPreg}) => {
    //definir el state
    const [cantidad, setCantidad]= useState(0);
    const [error,getError]= useState(false);

    //leer presupuesto 
    const leerprep = e=>{
        setCantidad(parseInt(e.target.value, 10))//los datos del input estan en string, parseInt los convierte en int

    }
    const agregarPrep =e=>{
        e.preventDefault()//evita que se recargue la pagina cuanso le das submit


    //validar
    if (cantidad <1 || isNaN(cantidad)){ // isNaN()-- valida en caso de que el usuario meta algo diferente a numeros
        getError(true)
        return;
    }
    //si no hay errores se deja en falso el state
    getError(false);
    setPresupuesto(cantidad)
    setRestante(cantidad)
    actualizarPreg(false)
    }




    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error? <Error
                mensaje ="presupuesto invalido"
            />:null }

            <form 
                onSubmit ={agregarPrep}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={leerprep}
                />
                 <input 
                    type="submit"
                    className="button-primary u-full-width"
                    placeholder="definir presupuesto"
                />

            </form>
        </Fragment>
    );
}
    Pregunta.propTypes={
        setPresupuesto: PropTypes.func.isRequired,
        setRestante: PropTypes.func.isRequired,
        actualizarPreg: PropTypes.func.isRequired
    }
 
export default Pregunta;