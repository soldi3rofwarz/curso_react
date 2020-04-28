import React from 'react';
import './Carrito.css'

const Producto = ({productos, carrito, setCarrito,producto}) => {

    const {nombre,descripcion,id}= producto;

    const Enviar=id=>{ //cuado solo pasas un parametro no es necesario poner parentesis
         const producto= productos.filter(producto =>producto.id===id)[0]
         setCarrito([
             //los tres puntos hacen una copia de el state para que se pueda modificar el orig. y 
             //no se borre lo almacenado en el
             ...carrito,producto
         ])
    }
    const eliminar =id=>{
        const productosE = carrito.filter(producto=> producto.id !==id)
        //colocar los productos en el state
        setCarrito(productosE)
    }
    return(
        <div className="card">
            <div className ="t">
                <h1>{nombre} </h1>
            <   h3>{descripcion}</h3>    
            </div>
            {productos
            ?
            (<button
            type="button"
            onClick={()=>Enviar(id)}
            >Enviar</button>)
            :
            (<button
            type="button"
            onClick={()=>eliminar(id)}
            >Eliminar</button>)
        }
        </div> 
    );
}
 
export default Producto;  