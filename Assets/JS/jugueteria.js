var payaso = parseInt(prompt("Ingrese el número de payasos"));
var muneca = parseInt(prompt("Ingrese el número de munecas"));

function main(payasos,munecas){
    /* En la variable numPaquetes almacenamos el valor del numero de paquetes totales */
    let numPaquetes = (pesoPaquete(payasos, munecas))/1000;
    if( (numPaquetes*1000)% 1000 != 0){
        numPaquetes = parseInt(numPaquetes)+1;
    }
    console.log(numPaquetes);
}

function pesoPaquete(payasos, munecas){
    let pesoTotal = (payasos * 112) + (munecas * 75);
    return pesoTotal;
}

/* Aqui se ejecuta el programa porque mandamos a llamar a la función main */
main(payaso, muneca);