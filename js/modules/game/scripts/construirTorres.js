// funcion para aconstruir las torres con las varas y discos
export default function construirTorres(towers) {
    // console.log(towers);
    towers.forEach(tower => {
        const vara = document.createElement('div')
        vara.className = 'vara'
        const disco = document.createElement('div')
        disco.className = 'disco'
        tower.innerHTML = ''
        tower.appendChild(vara)
        tower.appendChild(disco)
    })
}