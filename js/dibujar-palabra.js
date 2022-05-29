const d = document;

export const dibujarPalabra = (palabra) => {
    const lista = d.querySelector('.lista-palabra');
    const fragment = d.createDocumentFragment()
    const letras = palabra.split('')

    lista.textContent = ''

    letras.forEach((item) => {
        let li = d.createElement('li')
        li.classList.add('item-palabra')
        li.dataset.letra = item
        li.classList.add('hide')
        li.textContent = item
        fragment.appendChild(li)
    })

    lista.appendChild(fragment)
    
}