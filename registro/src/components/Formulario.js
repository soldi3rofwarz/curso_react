import React ,{Fragment, useState}from 'react';
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

    //state para citas
    const [citas,setCitas] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    })

    const [error, getError] = useState(false);
        //{
        //esto va a dentro de una funcion.
        //la e es una variable que se agregar en los parametros
        //console.log(e.target.name, e.target.value); <---------
        //e.target.name: muestra de donde vienen los datos
        //e.target.value: muestra el contenido ingresado en cada campo}

        const actualizarState = e=>{
            setCitas({
                ...citas, //spreadOperator saca una copia del state para que al modificarlo no cambien los datos. sirve para objetos y arreglos  
                //array destructuring
                [e.target.name ]: e.target.value //truco para escribir los datos del input dentro de la propiedad del state
            })
    }

        //extraer los valores
        const {mascota,propietario,fecha,hora,sintomas} = citas;

        //cuando el usuario preciona agregar

        const submitCita=e=>{
            e.preventDefault();

            //validar
            if(mascota.trim() ===''|| propietario.trim() ===''||fecha.trim() ===''||
            hora.trim() ===''||sintomas.trim() ==='') // trim elimina espacios en blanco al inicio y final
            {
                getError(true);
                return;// el return evita que el recorrido avance sin comprovar el if
            }

            //eliminar mensaje de vacio
            getError(false)
            //asignar ID
            citas.id = uuid();
            console.log(citas);
            //crear cita
            crearCita(citas)
            //reiniciar el form
            setCitas({
                mascota: '',
                propietario:'',
                fecha:'',
                hora:'',
                sintomas:''
            })
        }

    return (
        <Fragment>
            <h2>Insertar citas</h2>

            {error? <p className="alerta-error">Debe llenar todos los campos</p>: null}

            <form
            onSubmit={submitCita}
            >
                <label>Nombre mascotas</label>
                <input
                    type= "text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="nombre de mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type= "text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="nombre de propietario"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type= "date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type= "time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >  
                </textarea> 
                
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    enviar
                </button>
                
            </form>
        </Fragment>
    );
}
 Formulario.propTypes={
     crearCita: PropTypes.func.isRequired
 }
export default Formulario;