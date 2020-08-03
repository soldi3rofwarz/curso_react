import React from 'react';
import styled from '@emotion/styled'

const ContenHeader = styled.header`
    background-color: #26C6DA;
    padding: 5px;
    font-weight: bold;
    color: #ffffff;
`;
const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 10;
    text-align: center;
`;


const Header = ({titulo}) => {
    return (  
        <ContenHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenHeader>

    );
}
 
export default Header;