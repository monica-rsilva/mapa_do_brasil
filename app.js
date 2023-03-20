'use strict'

const mapa = document.querySelector('#map')

const sigla = document.getElementById('sigla')

const getEstado = ( {target} ) => {
    
    const estado = target.id.replace('BR-','')
    // const nomeEstado = target.getAttribute('title')
    // console.log(nomeEstado)

    sigla.innerHTML = estado;
}

// preencherDados(estado);
const preencherDados = async (estado) => {
    
    const sigla = getEstado(estado)
}

mapa.addEventListener('click', getEstado)


// http://localhost:8080/v1/senai/cidades?uf=SP