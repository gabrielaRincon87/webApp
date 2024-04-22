function buscarPelicula()
{    
    const div = document.getElementById("busqueda"); 
    div.innerHTML="";
console.log(div);
    const divBuscar = document.createElement("div");

    divBuscar.className = "card l-3 m-4 s-12 "; 

    div.appendChild(divBuscar);

    const p = document.createElement("p");
    p.textContent = "No se encontro la pelicula: " + document.getElementById("inputBuscar").value;
    divBuscar.appendChild(p);
  console.log( "No se encontro la pelicula: " + document.getElementById("inputBuscar").value);
}