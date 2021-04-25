//Promesas

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log('2 segundos despues');   
//     }, 2000);
// });

//Importamos la función getHeroeByid por default desde el 08-import-export.js
import getHeroeByid from './bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const retornaHeroe = getHeroeByid(2);
//     resolve(retornaHeroe);
//     //reject('No se pudo encontrar al heroe..');
//   }, 3000);
// });


// promesa.then((personaje)=> {
//   console.log('El hereo es:', personaje);
// }) //no ubicar ; para que acepte la siguiente linea de código
// .catch(err => console.warn(err));

//¿Cómo enviando un parametro a la promesa? 

//Forma 1:
// const getHeroeByidAsync = (id) =>{
//   const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const retornaHeroe = getHeroeByid(id);
//       resolve(retornaHeroe);
//       //reject('No se pudo encontrar al heroe..');
//     }, 3000);
//   });
//   return promesa;
// }

//Forma 2:
const getHeroeByidAsync = (id) =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const retornaHeroe = getHeroeByid(id);
      if(retornaHeroe !== undefined)
        resolve(retornaHeroe);
      else
        reject('No se pudo encontrar al heroe..');
    }, 3000);
  });
}

//LLamar a la función=>Forma 1
// getHeroeByidAsync(3).then((hereo)=>{
//  console.log('El hereo es: ',hereo);
// })
// Si existe un solo paramentro podemos eliminar los (), si la función posee una solá línea 
// de código podemos eliminar las {}

//LLamar a la función=>Forma 2
// getHeroeByidAsync(1).then(hereo=>console.log('El hereo es: ', hereo))
//                     .catch(error=>console.warn(error));

//LLamar a la función=>Forma 3
getHeroeByidAsync(30).then(console.log)
                    .catch(console.warn);
