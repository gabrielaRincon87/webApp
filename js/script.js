function agregarImg(datos) {
    console.log("estoy en agregar img" );
    console.log(datos);
    const div = document.querySelector("#peliculas"); 
    console.log (datos[1]); 
    for (let element of datos.peliculas) 
    {
        if (element.tipo == 'Tendencia'){
      console.log(element);
      console.log("estoy en el for img" );
      const divImg = document.createElement("div");
      divImg.className = "card l-3 m-4 s-12 "; 
  
      div.appendChild(divImg);
      const img = document.createElement("img");
      img.src = element.rutaImagen;
      img.alt = element.name;
      img.className = "img-pelis"; 
      const p = document.createElement("p");
      p.textContent = element.name;
      const argumento = document.createElement("p");
      argumento.textContent =  'Argumento: ' + element.argumento;
      
      console.log(element.name);
      console.log(element.rutaImagen);
      divImg.appendChild(img);
      divImg.appendChild(p);
     
      divImg.appendChild(argumento);
      divImg.appendChild(document.createElement("br"));
        }
    };
    
   

  
    
  }
  
  const request = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("WARN", response.status);
    const data = await response.json();
    agregarImg(data);
  };
  const datos = request("https://gabrielarincon87.github.io/webApp/peliculas.json");
 
  
