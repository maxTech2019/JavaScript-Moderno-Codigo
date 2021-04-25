// Desestructuración
// Asignación desestructurante
/* Documentación oficial:
   https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
*/

const persona = {
    nombre:'Fredy',
    edad:45,
    clave:'system'
};

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

//Forma 01
//const {nombre:n1, edad:n2, clave:n3} = persona;
//console.log(n1, n2, n3);


//Forma 02 (Recomendada)
//const {nombre, edad, clave} = persona;
//console.log(nombre, edad, clave);

//Ejemplo 1
//const retornaPersona = (usuario) =>{
//    console.log(usuario);
//}

//retornaPersona(persona);

//Ejemplo 2
//const retornaPersona = (usuario) =>{
//    const {nombre, edad, clave} = usuario;
//    console.log(nombre,edad,clave);
//}

//retornaPersona(persona);

//Ejemplo 3 (recomendado)
//Desestructuración con valores por defecto en el caso de que el atributo no exista en el objeto 
//const retornaPersona = ({nombre,edad, clave, sueldo=5400}) =>{
//    console.log(nombre,edad, clave, sueldo);
//}

//retornaPersona(persona);

//Ejemplo 4 
//Desestructuración que retorna un objeto literal 
const useContext = ({nombre, edad, clave}) => {
    return{
        nombreClave:clave,
        anios:edad,
        latlng:{
            latitud:100,
            longitud:-200
        }
    }
    
}

//const avenger = useContext(persona);
//console.log(avenger);

//-->Forma 1: Extraendo atributos de objetos aninados.
//Lee: Buscate el atributo latlng de él extrae latitud, longitud y conviertelos en constantes

//const {nombreClave, anios, latlng:{latitud, longitud}} = useContext(persona);

//-->Forma 2 (Desestructuración objetos aninados por separado)
const {nombreClave, anios, latlng} = useContext(persona);
const {latitud, longitud} = latlng;

console.log(nombreClave);
console.log(anios);
console.log(latitud);
console.log(longitud);