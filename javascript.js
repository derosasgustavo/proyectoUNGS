let renderizado = document.getElementById("renderizado");
let botonRunningAmateur = document.getElementById("botonRunningAmateur");
let botonRunningProfesional = document.getElementById("botonRunningProfesional");
let botonRunningMontana = document.getElementById("botonRunningMontana")
let zapatillaRunningAmateur = `./imagenes/zapatillaRunningAmateur.jpg`
let zapatillaRunningProfesional = `./imagenes/zapatillaRunningProfesional.jpg`
let zapatillasRunningMontana = `./imagenes/zapatillasRunningMontana.jpg`

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
