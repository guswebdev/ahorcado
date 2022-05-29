const d = document;

export const dibujarGuiones = (tamaño) => {
    const lista = d.querySelector('.lista-guiones')
    const fragment = d.createDocumentFragment()

    lista.textContent = ''

    for(let i =0; i < tamaño; i++){
        let li = d.createElement('li')
        li.classList.add('guiones')
        fragment.appendChild(li)
    }
    lista.appendChild(fragment)
}