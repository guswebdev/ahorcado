const d = document;
//const letrasIncorrectas = new Set()

export const letraIncorrecta = (letra,letrasIncorrectas) => {
    const lista = d.querySelector('.lista-palabra-2')
    letrasIncorrectas.add(letra)

    lista.textContent = ''

    console.info(letrasIncorrectas)
    letrasIncorrectas.forEach(item => {
        let li = d.createElement('li')
        li.classList.add('item-palabra')
        li.textContent = item
        lista.appendChild(li)
    })

    return letrasIncorrectas.size
}