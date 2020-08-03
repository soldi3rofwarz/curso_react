import React, {Fragment, useEffect} from 'react'
import {Revpres} from '../helper'
import PropTypes from 'prop-types'
import Error from './Error'


const ControlPresupuesto = ({presupuesto, restante}) => {

 
   

    return (  
        <Fragment>

            <div className="alert alert-primary">
                presupuesto:${presupuesto}
            </div>
            <div className = {Revpres(presupuesto,restante)}>
                restante:${restante}
            </div>

        </Fragment>
    );
}
ControlPresupuesto.propTypes={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
export default ControlPresupuesto;