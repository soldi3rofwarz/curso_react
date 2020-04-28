import React from "react"

const Paginacion = props =>{
    return(
    <div className= "py-3">
        <button onClick={props.paginaA} type= "button" className="btn btn-info mr1">aterior &larr;</button>
        <button onClick = {props.paginaS} type= "button" className="btn btn-info mr1">siguiente &rarr;</button>
    </div>
    )
}

export default Paginacion;