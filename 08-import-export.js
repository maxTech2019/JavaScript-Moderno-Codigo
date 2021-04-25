
/*
  1. Escribe palabra imp del intellige selecciona [import statement] luego TAB (recomendado)
  2. Escribe el nombre de la estructura a importa y luego TAB aparece la referencia completa
     así::: const { heroes } = require('./data/heroes'); También es válido.
*/

//import heroes, {owerns} from "./data/heroes";
import heroes from '../data/heroes';

//console.log(owerns);

///**********METODOS FIND() & FILTER()*/

//=>Método find()= Devuelve el primer valor que coincida con criterio.
// OJO:: devuelve un solo array.

//Forma 1-find()
// const getHeroeByid = (id) => {
//     return heroes.find ((heroe)=> {
//         if(heroe.id == id)
//             return true;
//         else
//             return false;
//     });
// }

//Forma 2-find()
//El método find() contiene función flecha con el parámetro "heroe" que compara C/elemento 
//por el campo id con el parámetro id

// const getHeroeByid = (id) => {
//     return heroes.find ((heroe)=> heroe.id === id);
// }

// Forma 3-find()
// La función flecha devuelve un solo return y podemos eliminamos las llasves y return
const getHeroeByid = (id) => heroes.find ((heroe)=> heroe.id === id);
// const resul = getHeroeByid(4);
// console.log(resul);

//=>Método filter(). Crea un nuevo array con todos los elementos q cumpla la condición
//  implementada por la función dada. OJO:: Retorna varios array

//Forma 1-filter()
// const getHeroeByowner = (owner) => {
//     return heroes.filter ((duenio)=> duenio.owner === 'DC');
// }

//Forma 2-filter()
//const getHeroeByowner = (owner) => heroes.filter ((duenio)=> duenio.owner === 'DC');

// const lista = getHeroeByowner ('DC');
// console.log(lista);

export default getHeroeByid;