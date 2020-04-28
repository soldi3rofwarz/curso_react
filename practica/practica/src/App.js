import React,{Component,Fragment,useState} from 'react';
import Buscador from './contenedor/Buscador'
import Resultado from './contenedor/resultado'
import Header from './minicurso/Header'
import Footer from './minicurso/Footer'

class App extends Component {

  render(){
    // sintax de useState. lo primero es el nombre de
    //de tu variable y el segundo es una funcion que 
    //siempre se agregan aunque no se use.
    const [producto,setproducto] = useState([
      {id:1, nombre:'Esther', descripcion:'my love'},
      {id:2, nombre:'Selena', descripcion:'my love #2'},
      {id:3, nombre:'Fatima', descripcion:'my love #3'},


    ])



    const fecha = new Date().getFullYear();
    return(
      <Fragment>
          <Header
            nombre = "Jose"
            apellido="Castro"
          />
          <Footer
          fecha= {fecha}
          />
      </Fragment>
    )
  }

/*   state={
    estado: '',
    imagenes: [],
    pagina: '',
  }
  paginaA =()=>{
    //leer pagina actual
    let pagina = this.state.pagina;
    //bloquear, si la pag es 1 ya no ir a atras
    if(pagina ===1) return null;
    //  restar   a las pagina actual
    pagina -= 1;
    //agregar el cambio al state
    this.setState({pagina},()=>{
      this.leerApi()
    });

  }
  paginaS=()=>{
    //leer pagina actual
    let pagina = this.state.pagina;
    //  sumar 1 a las pagina actual
    pagina += 1;
    //agregar el cambio al state
    this.setState({pagina}, ()=>{
      this.leerApi();
    });
  }

  leerApi=()=>{ //per_page:: es la catidad de resultados por defecto que aparecen al entrar a una pagina
    const termino= this.state.termino;
    const pagina = this.state.pagina;
    const url=`https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.estado}
    &per_page=30&page=${pagina}`
    
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
  }


  datosearch =(estado)=>{
    this.setState({
      estado: estado,
      pagina: 1,
    },()=>{
      this.leerApi()
    })
  }

  render(){
    return (
      
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">buscador</p>
          <Buscador
            datosbusqueda={this.datosearch}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes= {this.state.imagenes }
            paginaA= {this.paginaA}
            paginaS = {this.paginaS}
          />
        </div>
      </div>
        
    );
  } */
  
  //minicurso

}

export default App;
