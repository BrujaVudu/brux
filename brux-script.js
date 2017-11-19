var estanAfuera = false;

function cabecera() {
  var cabeza = document.getElementById("cabeza");
  cabeza.innerHTML = '<div class="prueba">Hola, putos</div>';
}

function fueraTitulo() {
  var titulo = document.getElementById("titulo");
  var menu = document.getElementById("menu");
  var brux = document.getElementById("brux");
  var fondo = document.getElementById("fondo");
  
  if (estanAfuera) {
    titulo.className = "titulo";
    menu.className = "menu inselecto";
    brux.className = "brux";
    fondo.className = "fondo";
  } else {
    titulo.className += " fueraTitulo";
    menu.className += " fueraMenu";
    brux.className += " verBrux";
    fondo.className += " fondoPeque";
  }
  
  estanAfuera = !estanAfuera;
}