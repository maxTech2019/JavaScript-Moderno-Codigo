//Funciones en JS

/*Función tradicional en JS

function saludar(nombre){
    return `Hola ${nombre}`;
}

*/

//console.log(saludar);


//Recomendación: Emplear constante con función tradicional
const saludar = function (nombre){
    return `Hola ${nombre}`;
}

//Función de tipo flecha
const saludar2 = (nombre)=>{
    return `Hola ${nombre}`;
}

//Si la función flecha devuelve un solo return y no posee mas código
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;


console.log(saludar('Maria'));
console.log(saludar2('Oscar'));
console.log(saludar3('Luis'));
console.log(saludar4());

const getUser = () =>{
    return{
        uid: 'ABC1278',
        username:'elPapi75'
    }
}

const getUser2 = () => ({
        uid: 'ABC0000',
        username:'elPapi00'
    });

console.log(getUser());

const user = getUser2();
console.log(user);

//Tarea
//1. Transformar a una función fecha
//2. Tiene que retornar un objeto explicito.
//3. Pruebas
function getUserActivo(nombre){
    return {
        iud:'ABC-999',
        username: nombre
    }
}

const usuarioActivo = getUserActivo('Maximilano');
console.log(usuarioActivo);


//Desarrollo Tarea
const usuarioActivo2 = (nombre)=> ({
        iud:'ABC-999',
        username: nombre
    });

const usuario = usuarioActivo2('Fredy');
console.log(usuario);