function main(){
    let formulario = document.forms["formulario"]; /* Hice algo como lo que nos habia dicho uriel al inicio, es decir guardar todo el contenido del formulario en una variable, OJO: puse dentro de los [] el id del formulario .*/

    let peso = parseInt(formulario["peso"].value); /* En una variable llamada peso cacho el valor de la anterior variable en su campo llamado "peso". El ".value" como su nombre lo dice es el valor.
    Fue necesario hacer un parseInt porque lo cachaba como un String y nosotros necesitamos un entero.*/
    
    let estatura = parseFloat(formulario["estatura"].value); /* cachamos el valor de la segunda cajita del form */
    let numero = parseInt(formulario["numero"].value); /* cachamos el valor de la tercer cajita del form */

    console.log(`Hola soy peso,mi valor es: ${peso} y mi tipo de dato es: ${typeof(peso)}`); /* Este console.log sólo lo usé para imprimir el valor y el tipo de dato */
    console.log(`Hola soy estatura,mi valor es: ${estatura} y mi tipo de dato es: ${typeof(estatura)}`);
    console.log(`Hola soy numero,mi valor es: ${numero} y mi tipo de dato es: ${typeof(numero)}`);

    /* LLamamos a las funciones: */
    masa(peso, estatura); 
    serie(numero);
}
/* Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.
 */
function masa( kilo, estatura){
    let resultado;
    resultado = kilo / (estatura*estatura) ; /* Realizando el calculo */
    console.log(resultado.toFixed(2)); /* Imprimiendo el resultado con 2 decimales */
    document.getElementById("contenidoIMC").innerHTML = `Hola! Tu Indice de Masa Corporal es: ${resultado.toFixed(2)}`;
}

/* Escribir un programa que lea un entero positivo, n , introducido por el usuario y después muestre en pantalla la suma de todos los enteros desde 1 hasta n
 */
function serie( n ){
    let resultado;
    resultado = (n*(n+1))/2; /* En la variable resultado guardamos el resultado del calculo. */
    console.log(resultado);
    document.getElementById("serieN").innerHTML = `Hola! El resultado de la suma de los número de 0 hasta ${n} es: ${resultado}`;
}
/* Prueba de escritorio:
    n= 5
    1 +2 +3 +4+ 5 = 15  n(n+1)/2
    5(5+1) / 2 = 30/2  30/2 = 15 
 */