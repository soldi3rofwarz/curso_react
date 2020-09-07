import React from 'react';
import styled from '@emotion/styled'

const Contenfrase = styled.div`
    padding: 3rem;
    border-radius: 0.5rem;
    background: #020609;
    max-width: 800px;
    color: #fff;

    @media (min-width: 992px){
        margin-top:10rem;
    }
`

const Frase = ({frase}) => {
    return (  
        <Contenfrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </Contenfrase>
    );
}
 
export default Frase;