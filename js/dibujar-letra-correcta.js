const d = document;
const alertContainer = d.querySelector(".container-alert");
const alertWin = d.querySelector(".alert-win");
const arrPrueba = [];

export const letraCorrecta = (letra, palabra) => {
  let mostrarLetra = "";
  const letras = palabra.split("");
  mostrarLetra = d.querySelectorAll(`.item-palabra[data-letra=${letra}]`);
  mostrarLetra.forEach((item) => {
    item.classList.remove("hide");
    arrPrueba.push(item.dataset.letra);
    console.log(arrPrueba);
  });

  if (arrPrueba.length === letras.length) {
    alertContainer.classList.remove("d-none");
    alertWin.classList.remove("d-none");
  }

};
