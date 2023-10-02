

// Pedir al usuario su nombre y apellidos
const nombreCompleto = prompt("Por favor, ingresa tu nombre y apellidos:");

// Tamaño del nombre y apellidos (sin contar espacios)
console.log("El tamaño del nombre y apellidos sin espacios es de: " 
+ entrada.replaceAll(" ","").length); 

// Convertir a minúsculas y mayúsculas
const nombreMinusculas = nombreCompleto.toLowerCase();
const nombreMayusculas = nombreCompleto.toUpperCase();

// Dividir el nombre y los apellidos
const partesNombre = nombreCompleto.split(" ");
const nombre = partesNombre[0];
const apellido1 = partesNombre[1] || "";
const apellido2 = partesNombre[2] || "";

// Propuesta de nombre de usuario 1: nombre + inicial del primer apellido + inicial del segundo apellido
const usuario1 = nombre.toLowerCase() + apellido1.charAt(0).toLowerCase() + apellido2.charAt(0).toLowerCase();

// Propuesta de nombre de usuario 2: dos primeras letras del nombre y de los dos apellidos
const usuario2 = nombre.substring(0, 2).toLowerCase() + apellido1.substring(0, 2).toLowerCase() + apellido2.substring(0, 2).toLowerCase();

// Mostrar los resultados
console.log("Tamaño del nombre más los apellidos (sin contar espacios): " + longitudNombre);
console.log("Nombre en minúsculas: " + nombreMinusculas);
console.log("Nombre en mayúsculas: " + nombreMayusculas);
console.log("Nombre: " + nombre);
console.log("Apellido 1: " + apellido1);
console.log("Apellido 2: " + apellido2);
console.log("Propuesta de nombre de usuario 1: " + usuario1);
console.log("Propuesta de nombre de usuario 2: " + usuario2);

// RETO EXTRA: Generar una contraseña con números que indican la posición de las letras
let contraseña = "";
for (let i = 0; i < nombre.length; i++) {
    contraseña += nombre.charCodeAt(i) - 96; // Restamos 96 para obtener la posición en el alfabeto
}
console.log("Contraseña: " + contraseña);

// SOLUCIÓN PROFESOR
entrada = prompt("Introduce tu nombre y apellidos");
console.log("El nombre introducido es: " + entrada);

// El tamaño del nombre más los apellidos (sin contar espacios)
console.log("El tamaño del nombre y apellidos sin espacios es de: " 
        + entrada.split(" ").join("").length);
         
//también valdría un replaceAll
console.log("El tamaño del nombre y apellidos sin espacios es de: " 
        + entrada.replaceAll(" ","").length); 

// La cadena en minúsculas y en mayúsculas
console.log("Minus: " + entrada.toLowerCase());
console.log("Mayus: " + entrada.toUpperCase());

/* Que divida el nombre y los apellidos y los muestr en 3 líneas
 * donde ponga "Nombre: /nApellido 1:/nApellido2:"
 */
 var elementosEntrada = entrada.split(" ");
 console.warn(elementosEntrada);
 console.log("Nombre: " + elementosEntrada[0] +
         "\nApellido 1: " + elementosEntrada[1] + 
         "\nApellido 2: " + elementosEntrada[2]);

// Propuesta de nombre de usuario -> davidfg
console.log("Propuesta de nombre 2: " +
elementosEntrada[0].toLowerCase() +
(elementosEntrada[1])[0].toLowerCase() + 
(elementosEntrada[2])[0].substring(0,1).toLowerCase()); 

// Propuesta de nombre de usuario -> dafega
console.log("Propuesta de nombre 3: " +
(elementosEntrada[0]).substr(0,2).toLowerCase() +
(elementosEntrada[1]).substr(0,2).toLowerCase() + 
(elementosEntrada[2]).substr(0,2).toLowerCase()); 

// Propuesta de contrasena

function creaPassword(nombre){
var resultado="";
for (let i=0;i<nombre.length; i++){
        resultado+=nombre.charAt(i)+i;
}
return resultado;
}

console.log("Propuesta de contraseña"+creaPassword(elementosEntrada[0]));