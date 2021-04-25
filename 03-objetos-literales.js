const persona = {
    nombre:'Fredy',
    apellido:'Jordan',
    edad:45,
    direccion:{
        ciudad: 'New Yourk',
        zip: 316542,
        lat: 887662,
        lng: -777762
    }
};

//console.table(persona);

/*const persona2 = persona; //Asignación de referencia del objeto, persona2 es el mismo persona
persona2.nombre='Luis';

console.log(persona);
console.log(persona2);*/

const persona2 = {...persona}; /*Operador de propagación spread [...] hace 
                                clon|copia del objeto y asigna a persona2*/
persona2.nombre='Luis';

console.log(persona);
console.log(persona2);