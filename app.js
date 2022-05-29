const d = document;
const $inicio = d.querySelector(".inicio");
const $juego = d.querySelector(".juego");
const $formulario = d.querySelector(".formulario");

const click = (e) => {
  // BOTON JUEGO NUEVO
  if (e.target.matches(".juego-nuevo")) {
    e.preventDefault();
    $inicio.classList.add("hide");
    $juego.classList.remove("hide");
  }
  // BOTON AGREGAR PALABRA
  if (e.target.matches(".agregar-palabra")) {
    e.preventDefault();
    $inicio.classList.add("hide");
    $formulario.classList.remove("hide");
  }
  // BOTON GUARDAR PALABRA
  if (e.target.matches(".guardar")) {
    e.preventDefault();
    $formulario.classList.add("hide");
    $juego.classList.remove("hide");
  }
  // BOTON ABANDONAR PARTIDA
  if (e.target.matches(".desistir")) {
    e.preventDefault();
    $juego.classList.add("hide");
    $inicio.classList.remove("hide");
  }
  // BOTON CANCELAR FORMULARIO
  if (e.target.matches(".cancelar")) {
    e.preventDefault();
    $formulario.classList.add("hide");
    $inicio.classList.remove("hide");
  }
};

d.addEventListener("click", click);
