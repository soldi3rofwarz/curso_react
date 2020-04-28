import React,{useState,Fragment}  from'react';
import Header from './minicurso/Header'
import Footer from './minicurso/Footer'
import Producto from './minicurso/Producto'
import Carrito from './minicurso/carrito'
import './minicurso/Carrito.css'


const Prueba = () => {

    // sintax de useState. lo primero es el nombre de
    //de tu variable y el segundo es una funcion que 
    //siempre se agregan aunque no se use.
    const [productos,setproducto] = useState([
        {id:1, nombre:'Televisor', descripcion:'Bueno'},
        {id:2, nombre:'Cama', descripcion:'Bonito'},
        {id:3, nombre:'Pollo', descripcion:'Barato'},
  
  
      ])

      const [carrito, setCarrito]= useState([]);

      const fecha = new Date().getFullYear();
  
    return ( 
        
        <Fragment>
              <Header
                nombre = "Jose"
                apellido="Castro"
              />
              <h1>productos</h1>
                {productos.map(producto=>(
                    <Producto
                        key={producto.id}
                        productos={productos}
                        producto={producto}
                        carrito={carrito}
                        setCarrito={setCarrito}
                        
                    />
                ))}   
                <Carrito
                  carrito={carrito}
                  setCarrito={setCarrito}
                />             
              <Footer
              fecha= {fecha}
              />
          </Fragment>
        );
}
 
export default Prueba;

  