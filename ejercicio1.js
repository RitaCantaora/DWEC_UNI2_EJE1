
// Pedir al usuario su nombre y apellidos
const nombreCompleto = prompt("Por favor, ingresa tu nombre y apellidos:");

// Tamaño del nombre y apellidos (sin contar espacios)
const longitudNombre = nombreCompleto.replace(/\s/g, "").length;

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
