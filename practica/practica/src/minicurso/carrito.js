import React from 'react';
import './Carrito.css'
import Producto from './Producto'

const Carrito = ({carrito, setCarrito}) => {
    return (  
            <div className="carrito">
                <h1>carrito</h1>
                {carrito.length === 0
                    ?
                        <p>No hay agregados</p>
                    :carrito.map(producto=>(
                        <Producto
                            key = {producto.id}
                            producto = {producto} 
                            carrito= {carrito}  
                            setCarrito ={setCarrito}   
                        />
                    ))


                }
            </div>
    );
}
 
export default Carrito;