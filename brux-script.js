var estanAfuera = false;

function cabecera() {
  var cabeza = document.getElementById("cabeza");
  cabeza.innerHTML = '<div class="prueba">Hola, putos</div>';
}

function fueraTitulo() {
  var titulo = document.getElementById("titulo");
  var menu = document.getElementById("menu");
  
  if (estanAfuera) {
    titulo.className = "titulo";
    menu.className = "menu inselecto";
  } else {
    titulo.className += " fueraTitulo";
    menu.className += " fueraMenu";
  }
  
  estanAfuera = !estanAfuera;
}