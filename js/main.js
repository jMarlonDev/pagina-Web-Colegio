
//agreganado la clase .visible a la navegacion para que se abra o se oculte con el menu desplegable
const navegacion = document.querySelector("#navegacion");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    navegacion.classList.add("visible");
});

cerrar.addEventListener("click", ()=>{
    navegacion.classList.remove("visible")
});

// agregando click de las fotos de la galeria de inicio

document.querySelectorAll(".imagen-contenido img").forEach(imagen=>{
    imagen.onclick = () =>{
        document.querySelector(".imagen-click").style.display = "block";
        document.querySelector(".imagen-click img").src = imagen.getAttribute("src");
    }
}); 

document.querySelector(".imagen-click").onclick = () =>{
    document.querySelector(".imagen-click").style.display = "none";
}
