import React, {Fragment} from 'react';
import styled from '@emotion/styled'
import { primerMayuscula } from '../helper';


const ContenResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00B38F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {
    //extraer de datos
    const {marcas,year,plan}= datos;

    if (marcas === ''|| year ===''|| plan ==='')return null;

    return ( 
        <ContenResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca:{primerMayuscula(marcas)}</li>
                <li>Plan:{primerMayuscula(plan)}</li>
                <li>año del auto:{year}</li>
            </ul>
        </ContenResumen>
     );
}
 
export default Resumen;