import React from 'react';
import  Gasto from './gasto'
import PropTypes from 'prop-types'

const Listado = ({gasto}) => (
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gasto.map(gastos=>(
            <Gasto
                id={gastos.id}
                gastos={gastos}
            />
        ))}
    </div>
)
Listado.propTypes={
    gasto: PropTypes.array.isRequired
}
 
export default Listado;
