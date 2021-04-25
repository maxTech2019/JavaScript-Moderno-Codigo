
//const equipos= ['LDU','Barcelona','Emelec'];

//console.log(equipos[0]);
//console.log(equipos[1]);
//console.log(equipos[2]);

//Desestructuración de un array literal
//const [q1, q2, q3] = equipos;

//Lee: ignora la primera y segunda posición y extrae la tercera posición en la constante q3
//const [,, q3] = equipos;
//console.log(q3);

//Función flecha que retorne un Array
//const retornaArreglo = () => {
//    return ['LDU', 'Barcelona', 'Emelec'];
//}

//const equipos = retornaArreglo();
//console.log(equipos);

//Desestructurando función flecha que retorna un array literal
//const [e1, ,e3] = retornaArreglo();
//console.log(e1);
//console.log(e3);

//Tarea
//1. el primer valor del arr se llamará nombre
//2. el segundo valor del arr se llamará setNombre

//Función fecla que retorna:: array con [1er-Pos=> un valor y 2da-Pos=> función fecha] 
const useState = (valor) => {
    return[valor, () =>{console.log('Hola Mundo ')}];
}

//const arr = useState('Fredy');
//console.log(arr);

//Desestructurando el arreglo useState
const [nombre,setNombre] = useState('Fredy');

//Mostramos los elementos del arreglo useState desestructurando
console.log(`El valor es: ${nombre}`);
console.log(setNombre); //Mostramos contenido de la función
setNombre(); //Ejecutamos la función




