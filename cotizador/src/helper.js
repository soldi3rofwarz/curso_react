// obtiene diferencia de años

export function getDifYear(year){
    return new Date().getFullYear() - year;
}

// calcula el total a pagar ppor marca

export function calcMarca (marca){
    let incremento;

    switch (marca){

        case 'europeo':
            incremento= 1.30;
            break;
        case 'americano':
            incremento= 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//calcular el tipo de seguro

export function getPlan(plan){
    return (plan === 'basico')? 1.20: 1.50
} 


//muestra la primer letra mayuscula

export function primerMayuscula (texto){
    return texto.charAt(0).toUpperCase()+ texto.slice(1);
}