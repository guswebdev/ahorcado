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
const pincel = $canvas.getContext("2d");
const $listaGuiones = d.querySelector(".lista-guiones");
const $listaPalabras = d.querySelector(".lista-palabra");
const $listaPalabrasIncorrectas = d.querySelector(".lista-palabra-2");
const $alertContainer = d.querySelector(".container-alert");
const $alertWin = d.querySelector(".alert-win");
const $alertLose = d.querySelector(".alert-lose");

let palabraSecreta = "";
let control = false;
let intentos;
let aciertos;
let letrasCorrectas = [];
let letrasIncorrectas = new Set();

function dibujarTablero(pincel) {
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
  $listaGuiones.textContent = "";

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

  $listaPalabras.textContent = "";

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
    letrasCorrectas.push(item.dataset.letra);
  });

  return letrasCorrectas.length;
}

function letraIncorrecta(letra) {
  letrasIncorrectas.add(letra);

  $listaPalabrasIncorrectas.textContent = "";

  letrasIncorrectas.forEach((item) => {
    let $li = d.createElement("li");
    $li.classList.add("item-palabra");
    $li.textContent = item;
    $listaPalabrasIncorrectas.appendChild($li);
  });

  return letrasIncorrectas.size;
}

/* FUNCION DIBUJAR LINEA*/
function dibujarLinea(x1, y1, x2, y2) {
  pincel.strokeStyle = "#072b61";
  pincel.moveTo(x1, y1);
  pincel.lineWidth = 10;
  pincel.lineCap = "round";
  pincel.lineTo(x2, y2);
  pincel.stroke();
}
/* FUNCION DIBUJAR CIRCULO*/
function dibujarCirculo(x, y, r, inicio, fin, sentido) {
  //pincel.beginPath();
  pincel.arc(x, y, r, inicio, fin, sentido);
  pincel.strokeStyle = "#072b61";
  pincel.lineWidth = 10;
  pincel.lineCap = "round";
  pincel.stroke();
}

function dibujarAhorcado(intentos) {
  switch (intentos) {
    case 1:
      dibujarLinea(10, 395, 290, 395);
      break;

    case 2:
      dibujarLinea(50, 395, 50, 50);
      break;

    case 3:
      dibujarLinea(50, 50, 200, 50);
      break;

    case 4:
      dibujarLinea(200, 50, 200, 100);
      break;

    case 5:
      //dibujarCirculo(200, 140, 35, 0, Math.PI * 2, true);
      dibujarCirculo(200, 140, 35, 1.5 * Math.PI, Math.PI * 1.55, true);
      break;

    case 6:
      dibujarLinea(200, 175, 200, 300);
      break;

    case 7:
      dibujarLinea(200, 200, 160, 250);
      break;

    case 8:
      dibujarLinea(200, 200, 240, 250);
      break;

    case 9:
      dibujarLinea(200, 300, 160, 350);
      break;

    case 10:
      dibujarLinea(200, 300, 240, 350);
      break;
  }
}

function finDelJuego(intentos) {
  if (intentos === 10) {
    console.log("FIN DEL JUEGO");
    $alertContainer.classList.remove("d-none");
    $alertLose.classList.remove("d-none");
    control = false;
  }
}

function juegoGanado(aciertos) {
  if (aciertos === palabraSecreta.length) {
    console.log("JUEGO GANADO");
    $alertContainer.classList.remove("d-none");
    $alertWin.classList.remove("d-none");
  }
}

function reset() {
  $alertContainer.classList.add("d-none");
  $alertWin.classList.add("d-none");
  $alertLose.classList.add("d-none");
  $listaPalabrasIncorrectas.textContent = "";
  letrasCorrectas = [];
  letrasIncorrectas.clear();
  control = true;
}

function iniciarJuego() {
  control = true;
  dibujarTablero(pincel);
  palabraSecreta = palabraAleatoria();
  dibujarPalabra();
  dibujarGuiones(palabraSecreta.length);
  console.log(palabraSecreta);
}

/* EVENTOS */

const eventoClick = (e) => {
  if (e.target.matches(".juego-nuevo")) {
    e.preventDefault();
    $inicio.classList.add("d-none");
    $juego.classList.remove("d-none");
    /*
    control = true;
    dibujarTablero(pincel);
    palabraSecreta = palabraAleatoria();
    dibujarPalabra();
    dibujarGuiones(palabraSecreta.length);
    console.log(palabraSecreta);
    */
    iniciarJuego();
  }

  if (e.target.matches(".resetear-juego")) {
    reset();
    /*
    control = true;
    dibujarTablero(pincel);
    palabraSecreta = palabraAleatoria();
    dibujarPalabra();
    dibujarGuiones(palabraSecreta.length);
    console.log(palabraSecreta);
    */
    iniciarJuego();
  }

  if (e.target.matches(".desistir")) {
    $inicio.classList.remove("d-none");
    $juego.classList.add("d-none");
    reset();
    control = false;
  }

  if (e.target.matches(".agregar-palabra")) {
    e.preventDefault();
    $inicio.classList.add("d-none");
    $formulario.classList.remove("d-none");
  }

  if (e.target.matches(".cancelar")) {
    e.preventDefault();
    $formulario.classList.add("d-none");
    $inicio.classList.remove("d-none");
  }

  if (e.target.matches(".guardar")) {
    e.preventDefault();
    $formulario.classList.add("d-none");
    $juego.classList.remove("d-none");
    //Esto deberia aplicar LocalStorage
    const nuevaPalabra = d.querySelector(".textarea").value;
    palabras.push(nuevaPalabra);
    /*
    control = true;
    dibujarTablero(pincel);
    palabraSecreta = palabraAleatoria();
    dibujarPalabra();
    dibujarGuiones(palabraSecreta.length);
    */
    iniciarJuego();
  }
};

d.addEventListener("click", eventoClick);

const eventoKeypress = (e) => {
  if (control && esLetra(e.key)) {
    if (incluyeLetra(e.key, palabraSecreta)) {
      aciertos = letraCorrecta(e.key);
      juegoGanado(aciertos);
    } else {
      intentos = letraIncorrecta(e.key);
      dibujarAhorcado(intentos);
      finDelJuego(intentos);
    }
  }
};

d.addEventListener("keypress", eventoKeypress);
