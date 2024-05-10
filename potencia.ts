import * as readlineSync from "readline-sync" ;

let base: number = readlineSync.questionInt("Ingresaen numero de la base:");
let exponente: number = readlineSync.questionInt("Ingrese el numero del exponente: ");
let resultado:number = 0 

if (exponente >=0){
    resultado = potencia (base, exponente);
    console.log ("El resultado es: " + resultado)
}
else{
    console.log("Ingrese un numero mayor a 0 ")
}

function potencia (base:number, exponente:number){
    if (exponente==0){
        return 1;
    }
    else{
       let resultado = 1
        for (let i = 1; i<= exponente; i ++){
            resultado *= base
        }
    return resultado 
    }
}