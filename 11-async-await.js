
const getImage = async () => {
  try {
      const apiKey = 'wt0Z6UFSiP3deeVowKa17h8naKCv9Ok1';
      const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    //Forma1
    // const data = await resp.json();
    // const {url} = data.data.images.original;
  
    //Forma 2
      const {data} = await resp.json();
      const {url} = data.images.original;
      const img = document.createElement('img');
      img.src = url;
      document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();

/* Los errores se manejan a traves de try-catch en un función Async-Await
 */
       