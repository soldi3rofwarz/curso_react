import React from 'react';

import './Carrito.css'
const Header = ({nombre, apellido}) => { //en vez de poer props, se pone el destructuring 
                                        //de una vez al agregar llaves
    return ( 
        <header>
            <h1>{nombre} {apellido}</h1>
        </header>
    )
    
}
 
export default Header;