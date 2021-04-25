
const apiKey = 'wt0Z6UFSiP3deeVowKa17h8naKCv9Ok1';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


//Forma 1
// peticion.then((resp)=>{
//   resp.json().then((data)=>{
//       console.log(data);
//   })
// });

//Forma 2 (simplificado) Promesas en cadena
// peticion.then( resp => resp.json()) //resultado de esta promesa pasa siguiente then() asi sucesivamente
//         .then( data => console.log(data.data)) //mostramos el array data su componente data
//         .catch(console.warn); // este catch captura todos los errores.

// //Forma 3 (simplificado) Promesas en cadena
// peticion.then( resp => resp.json()) 
//         .then( ({data}) => console.log(data.images.original.url)) //desestructuramos el compomente data
//         .catch(console.warn); // este catch captura todos los errores.

//Forma 4 
// peticion.then( resp => resp.json()) 
//         .then( ({data}) => {
//           const {url}= data.images.original; //desestructuramos el compomente url y crea constante
//           console.log(url) 
//         })
//         .catch(console.warn); // este catch captura todos los errores.

//Forma 5
peticion.then( resp => resp.json()) 
        .then( ({data}) => {
          const {url}= data.images.original; 
          //Mostra el Gif en HTML
          const img = document.createElement('img');
          img.src = url;
          document.body.append(img);
        })
        .catch(console.warn); // este catch captura todos los errores.