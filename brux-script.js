var estanAfuera = false;

function cabecera() {
  var cabeza = document.getElementById("cabeza");
  cabeza.innerHTML = '<div class="prueba">Hola, putos</div>';
}

function fueraLogo() {
  var logo = document.getElementById("logo");
  var menu = document.getElementById("menu");
  var brux = document.getElementById("brux");
  var fondo = document.getElementById("fondo");
  var presetacion = document.getElementById("presentacion");
  
  if (estanAfuera) {
    logo.className = "logo";
    menu.className = "menu inselecto";
    brux.className = "brux";
    fondo.className = "fondo";
    presentacion.className = "presentacion";
  } else {
    logo.className += " fueraLogo";
    menu.className += " fueraMenu";
    brux.className += " verBrux";
    fondo.className += " fondoPeque";
    presentacion.className += " entraPresentacion";
  }
  
  estanAfuera = !estanAfuera;
}