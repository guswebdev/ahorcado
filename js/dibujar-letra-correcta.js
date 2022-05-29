const d = document;

export const letraCorrecta = (letra) => {
    let mostrarLetra = ''
    mostrarLetra = d.querySelectorAll(`.item-palabra[data-letra=${letra}]`)
    mostrarLetra.forEach(item => item.classList.remove('hide'))   
}