var estanAfuera = false;

function fueraLogo() {
  var logo = document.getElementById("logo");
  var menu = document.getElementById("menu");
  var fondo = document.getElementById("fondo");
  var presetacion = document.getElementById("presentacion");
  
  if (estanAfuera) {
    logo.className = "logo";
    menu.className = "menu inselecto";
    fondo.className = "fondo";
    presentacion.className = "presentacion";
  } else {
    logo.className += " fueraLogo";
    menu.className += " fueraMenu";
    fondo.className += " fondoPeque";
    presentacion.style.display = "block"
    setTimeout(function(){ presentacion.className += " entraPresentacion"; }, 500);
  }
  
  estanAfuera = !estanAfuera;
}
