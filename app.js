import { dibujarAhorcado } from "./js/dibujar-ahorcado.js";
import { dibujarGuiones } from "./js/dibujar-guiones.js";
import { letraCorrecta } from "./js/dibujar-letra-correcta.js";
import { letraIncorrecta } from "./js/dibujar-letra-incorrecta.js";
import { dibujarPalabra } from "./js/dibujar-palabra.js";
import { elegirPalabra } from "./js/elegir-palabra.js";
import { incluyeLetra } from "./js/incluye-letra.js";
import { esLetra } from "./js/validar-letra.js";

const d = document;
const $inicio = d.querySelector(".inicio");
const $juego = d.querySelector(".juego");
const $formulario = d.querySelector(".formulario");
const pantalla = d.querySelector("canvas");
const pincel = pantalla.getContext("2d");
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
  "aleatorias",
];
const letrasIncorrectas = new Set();
let palabra = "";

const click = (e) => {
  // BOTON JUEGO NUEVO
  if (e.target.matches(".juego-nuevo")) {
    e.preventDefault();
    $inicio.classList.add("d-none");
    $juego.classList.remove("d-none");

    /* INICIO DEL JUEGO */
    palabra = elegirPalabra(palabras);
    console.log(palabra);
    dibujarPalabra(palabra);
    dibujarGuiones(palabra.length);
    /* ------------------------------ */
    const keydown = (e) => {
      /* --- VALIDAR LETRA --- */
      if (!esLetra(e.key)) return console.log("NO ES LETRA");

      /* --- VALIDAR SI EXISTE EN LA PALABRA --- */
      if (incluyeLetra(e.key, palabra)) {
        console.log("acertaste");
        letraCorrecta(e.key);
      } else {
        let contador = letraIncorrecta(e.key, letrasIncorrectas);
        dibujarAhorcado(contador,pantalla,pincel);
      }
    };

    d.addEventListener("keydown", keydown);
    /* ------------------------------ */
  }
  // BOTON RESETEAR EL JUEGO
  if (e.target.matches(".resetear-juego")) {
    e.preventDefault();
    palabra = "";
    const listas = d.querySelectorAll(".lista");
    listas.forEach((item) => (item.textContent = ""));
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    letrasIncorrectas.clear();
  }
  // BOTON AGREGAR PALABRA
  if (e.target.matches(".agregar-palabra")) {
    e.preventDefault();
    $inicio.classList.add("d-none");
    $formulario.classList.remove("d-none");
  }
  // BOTON GUARDAR PALABRA
  if (e.target.matches(".guardar")) {
    e.preventDefault();
    $formulario.classList.add("d-none");
    $juego.classList.remove("d-none");

    const nuevaPalabra = d.querySelector(".textarea").value;
    palabras.push(nuevaPalabra);
  }
  // BOTON ABANDONAR PARTIDA
  if (e.target.matches(".desistir")) {
    e.preventDefault();
    $juego.classList.add("d-none");
    $inicio.classList.remove("d-none");
  }
  // BOTON CANCELAR FORMULARIO
  if (e.target.matches(".cancelar")) {
    e.preventDefault();
    $formulario.classList.add("d-none");
    $inicio.classList.remove("d-none");
  }
};

d.addEventListener("click", click);
