import React from 'react';
import PropTypes from 'prop-types'

const Citas = ({citas, eliminarcita}) => (
    <div className="cita">
        <p>mascota: <span>{citas.mascota}</span></p>
        <p>Propietario: <span>{citas.propietario}</span></p>
        <p>fecha: <span>{citas.fecha}</span></p>
        <p>hora: <span>{citas.hora}</span></p>
        <p>sintomas: <span>{citas.sintomas}</span></p>

        <button className ="button eliminar u-full-width"
            onClick={()=> eliminarcita(citas.id)}
        >eliminar &times;</button>
    </div>
)
Citas.propTypes = {
    citas: PropTypes.object.isRequired,
    eliminarcita: PropTypes.func.isRequired
}
 
export default Citas;