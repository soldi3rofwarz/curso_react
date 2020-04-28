import React,{Component} from 'react'
import Image from './../componentes/image'
import Paginacion from './../componentes/paginacion'

class Resultado extends Component{
    mostrarImage =()=>{
        const imagenes = this.props.imagenes;
        if (imagenes.length === 0) return(null)
        console.log(imagenes)

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">

                    {imagenes.map(imagen => (
                        <Image
                            key={imagen.id}
                            imagen= {imagen}
                        />
                    ))}
                </div>
                <Paginacion
                    paginaA = {this.props.paginaA}
                    paginaS = {this.props.paginaS}
                />
            </React.Fragment>

        )
    }

    render(){
        return(
            <React.Fragment>
                {this.mostrarImage()}
            </React.Fragment>
        )
    }
}
export default Resultado;