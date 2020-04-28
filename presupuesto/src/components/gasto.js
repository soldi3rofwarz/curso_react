import React from 'react';
import PropTypes from 'prop-types'
const Gasto = ({gastos}) => (
    <li className="gastos">
        <p>
            {gastos.nombre}
            <span className="gasto"> 
                $ { gastos.fcantidad}
            </span>
        </p>
    </li>
)

Gasto.propTypes={
    gastos: PropTypes.object.isRequired
}
export default Gasto;