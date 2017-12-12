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
    setTimeout(function(){ presentacion.style.display = "none"; }, 100);
  } else {
    logo.className += " fueraLogo";
    menu.className += " fueraMenu";
    brux.className += " verBrux";
    fondo.className += " fondoPeque";
    presentacion.style.display = "block"
    setTimeout(function(){ presentacion.className += " entraPresentacion"; }, 500);
  }
  
  estanAfuera = !estanAfuera;
}


$(function () {
  $.get(
    "https://api.airtable.com/v0/appAhDvzAtHAWleAz/Table%201?api_key=keyD8IYkmIDejDWut",
    function (data) {
      $.each(data.records,
        function (i, e) {
          i = 1+i;
          $("#resumen").append("<h1>"+i+" "+  e.fields.titulo + "</h1><p>"+e.fields.texto.replace(/\n/g,"<br>")+"</p>");
        });
      });
    });
