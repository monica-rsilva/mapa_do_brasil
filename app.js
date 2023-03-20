'use strict'

const mapa = document.querySelector('#map')

const getEstado = ( {target} ) => {
    
    const estado = target.id.replace('BR-','')
    // const nomeEstado = target.getAttribute('title')
    // console.log(nomeEstado)

    // preencherDados(estado)
}

mapa.addEventListener('click', getEstado)