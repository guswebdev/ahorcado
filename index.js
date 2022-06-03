const d = document;
const palabras = [
  "hola",
  "como",
  "estas",
  "chau",
  "estoy",
  "haciendo",
  "pruebas",
  "con",
  "palabras",
  "random",
];
const $inicio = d.querySelector(".inicio");
const $juego = d.querySelector(".juego");
const $formulario = d.querySelector(".formulario");
const $canvas = d.querySelector("canvas");
const $listaGuiones = d.querySelector(".lista-guiones");
const $listaPalabras = d.querySelector(".lista-palabra");
const $listaPalabrasIncorrectas = d.querySelector(".lista-palabra-2");
let palabraSecreta = "";
let control = false;
const letrasIncorrectas = new Set();

function dibujarTablero() {
  const pincel = $canvas.getContext("2d");
  const stylesCanva = getComputedStyle($canvas);
  const w = stylesCanva.width;
  const h = stylesCanva.height;
  $canvas.width = w.split("px")[0];
  $canvas.height = h.split("px")[0];
  //pincel.fillStyle = "#eff1fa";
  pincel.fillStyle = "crimson";
  pincel.fillRect(0, 0, $canvas.width, $canvas.height);
}

function palabraAleatoria() {
  return palabras[Math.floor(Math.random() * palabras.length)];
}

function dibujarGuiones(tamaño) {
  for (let i = 0; i < tamaño; i++) {
    let $li = d.createElement("li");
    $li.classList.add("guiones");
    $listaGuiones.appendChild($li);
  }
}

function esLetra(letra) {
  let regExp = /^[a-zñÑ]+$/;
  return regExp.test(letra);
}

function incluyeLetra(letra, palabra) {
  return palabra.includes(letra);
}

function dibujarPalabra() {
  let letras = palabraSecreta.split("");

  letras.forEach((item) => {
    let $li = d.createElement("li");
    $li.classList.add("item-palabra");
    $li.dataset.letra = item;
    $li.classList.add("hide");
    $li.textContent = item;
    $listaPalabras.appendChild($li);
  });
}

function letraCorrecta(letra) {
  let mostrarLetra = d.querySelectorAll(`.item-palabra[data-letra=${letra}]`);
  mostrarLetra.forEach((item) => {
    item.classList.remove("hide");
  });
}

function letraIncorrecta(letra) {
  letrasIncorrectas.add(letra);

  $listaPalabrasIncorrectas.textContent = ''

  letrasIncorrectas.forEach((item) => {
    let $li = d.createElement("li");
    $li.classList.add("item-palabra");
    $li.textContent = item;
    $listaPalabrasIncorrectas.appendChild($li);
  });
}

/* EVENTOS */

const eventoClick = (e) => {
  if (e.target.matches(".juego-nuevo")) {
    e.preventDefault();
    $inicio.classList.add("d-none");
    $juego.classList.remove("d-none");
    control = true;
    dibujarTablero();
    palabraSecreta = palabraAleatoria();
    dibujarPalabra();
    dibujarGuiones(palabraSecreta.length);
    console.log(palabraSecreta);
  }
};

d.addEventListener("click", eventoClick);

const eventoKeypress = (e) => {
  if (control && esLetra(e.key)) {
    if (incluyeLetra(e.key, palabraSecreta)) {
      letraCorrecta(e.key);
    } else {
      letraIncorrecta(e.key);
    }
  }
};

d.addEventListener("keypress", eventoKeypress);
