let renderizado = document.getElementById("renderizado");
let botonRunningAmateur = document.getElementById("botonRunningAmateur");
let botonRunningProfesional = document.getElementById("botonRunningProfesional");
let botonRunningMontana = document.getElementById("botonRunningMontana")
let menuAparece = document.getElementById(`menu`)
let zapatillaRunningAmateur = `./imagenes/zapatillaRunningAmateur.jpg`
let zapatillaRunningProfesional = `./imagenes/zapatillaRunningProfesional.jpg`
let zapatillasRunningMontana = `./imagenes/zapatillasRunningMontana.jpg`
let navOculto = document.getElementById (`navOculto`)


function displayMenu(menuOculto) {
menuOculto.onclick = () => {
      
    menuOculto.innerHTML = `<ul class="navBar" id="navBar" display="none">
  <li> <a href="index.html" class="aLi"> Inicio </a></li>
  <li> <a href=#amateur class="aLi">Amateur</a></li>
  <li> <a href=#profesional class="aLi">Profesional</a></li>
  <li> <a href=#montana class="aLi">Trail</a></li>
  <li> <a href="./distribuidores.html" class="aLi">Distribuidores</a></li>
  <li> <a href=#contacto class="aLi">Contacto</a></li>
</ul>`
}
}

displayMenu(navOculto)


function renderizar (boton,zapatilla) {
  boton.onclick  = () => {   
    renderizado.innerHTML = ``
    renderizado.innerHTML += `<div class="tarjetaProducto">   
    <div class="cuerpo">
      <img src=${zapatilla} alt="zapatilla" class="imagenTarjeta">
    </div>
    <div class="pie">
      <a href="#">Comprar</a>
    </div>
  </div>
  <div class="tarjetaProducto">   
    <div class="cuerpo">
      <img src=${zapatilla} alt="zapatillao" class="imagenTarjeta">
    </div>
    <div class="pie">
      <a href="#">Comprar</a>
    </div>
  </div>
  <div class="tarjetaProducto">   
    <div class="cuerpo">
      <img src=${zapatilla} alt="zapatilla" class="imagenTarjeta">
    </div>
    <div class="pie">
      <a href="#">Comprar</a>
    </div>
  </div>`  
                       }; 
  
}
renderizar(botonRunningAmateur, zapatillaRunningAmateur)
renderizar(botonRunningProfesional, zapatillaRunningProfesional)
renderizar(botonRunningMontana, zapatillasRunningMontana)
