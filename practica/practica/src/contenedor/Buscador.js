import React, {Component} from 'react'

class Buscador extends Component{
    searchref = React.createRef();
    getdata = (e)=>{
        e.preventDefault();
        console.log(this.searchref.current.value)
        const termino = this.searchref.current.value
        this.props.datosbusqueda(termino);
    }

    render(){
        return(
            <form onSubmit={this.getdata}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchref} type="text" className= "form-control form-control-lg" 
                        placeholder="ingrese texto"/>
                    </div>
                    <div className="form-group col-md-2 col-xs-2">
                        <input type="submit" className= "btn btn-lg btn-info btn-block" 
                        value="Buscar..."/>
                    </div>
                </div>
            </form>
        )
    }
}

export default Buscador;