
const nombre = 'Fredy';
const apellido = 'Jordan';

//const nombreCompleto = nombre+' '+apellido;

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return 'hola '+ nombre;
}

console.log(`Este es un texto ${getSaludo(nombreCompleto)}`);
