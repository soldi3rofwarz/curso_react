import React,{useState} from 'react';
import styled from '@emotion/styled'
import {getDifYear, calcMarca, getPlan} from "./../helper";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const Input = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width:100%;
    padding: 1rem;
    color:#fff;
    text-transform: uppercase;
    font-weight: bold;
    border:none;
    margin-top: 2rem;
    transitio: background-color 0.3s ease;
    
    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding:1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;
const Formulario = ({getResumen, funcCargando}) => {

     const [datos,getfDatos] = useState({
         marcas: '',
         year: '',
         plan:''
     });

     const [error, getError]= useState(false)

     //extraer los valores del state
     const {marcas, year, plan} = datos;

     //leer los datos del state
     const Getinf =e=>{
         getfDatos({
             ...datos,
             [e.target.name]: e.target.value
         })
     }
     //cuando el usuario presiona el boton
     const CatchError =e=>{
         e.preventDefault();

         if (marcas.trim() === '' || year.trim() === '' || plan.trim()===''){
             getError(true);
             return;
         }
         getError(false);

         let resultados = 2000;

         //obtener la dif de a;os
         const diferencia = getDifYear(year);


         //por cada a;o hay que restar el 3%
         resultados -= ((diferencia*3)*resultados)/100

         //americano 15%
         //asiatico 5%
         //europeo 30%
         resultados= calcMarca(marcas)*resultados;



         //basico aumenta 20%

         //completo 50%
        const incrementoPlan = getPlan(plan)
        resultados = parseFloat(incrementoPlan * resultados).toFixed(2)
         //total

         funcCargando(true);

         setTimeout(() => {
            //elimina el spinner
            funcCargando(false)
            //pasa la info al componente principal
            getResumen({
                cotizacion:  Number(resultados),
                datos
            })
         }, 3000);
         
     }


    return ( 
        <form
        onSubmit = {CatchError}
        >
            {error? <Error>Todos los campos son obligatorios</Error> : null}

            <Campo>
                <Label>Marca</Label>
                <Select 
                    name= "marcas"
                    value ={marcas}
                    onChange= {Getinf}
                >
                    <option value = "">Seleccione</option>
                    <option value = "Americano">Americano</option>
                    <option value = "Asiatico">Asiatico</option>
                    <option value = "Europeo">Europeo</option>


                </Select>
                
            </Campo>

            <Campo>
             <Label>Año</Label>
             
                <Select 
                    name= "year"
                    value ={year}
                    onChange= {Getinf}
                >
                    <option value = "">Seleccione</option>
                    <option value = "2021">2021</option>
                    <option value = "2020">2020</option>
                    <option value = "2019">2019</option>
                    <option value = "2018">2018</option>
                    <option value = "2017">2017</option>
                    <option value = "2016">2016</option>
                    <option value = "2015">2015</option>
                    <option value = "2014">2014</option>
                    <option value = "2013">2013</option>
                    <option value = "2012">2012</option>
                    
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>

                <Input
                    type="radio"
                    name= "plan"
                    value= "basico"
                    checked = {plan === "basico"}
                    onChange = {Getinf}
                />basico

                <Input
                    type="radio"
                    name= "plan"
                    value= "completo"
                    checked = {plan === "completo"}
                    onChange = {Getinf}
                />completo
            </Campo>
            <Button type="submit">Cotizar</Button>
        </form>

     );
}
 
export default Formulario;