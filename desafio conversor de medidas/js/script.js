function botao() {
    var metro = Number(window.prompt('Digite um valor: '))
    var milimetros = metro * 1000
    var centimetros = metro * 100
    var decimetros = metro * 10
    var decametro = metro / 10
    var hectometro = metro / 100
    var quilometro = metro / 1000
    var comentar = window.document.querySelector('#comentario')
    var km = window.document.querySelector('#km')
    var hm = window.document.querySelector('#hm')
    var dam = window.document.querySelector('#dam')
    var dm = window.document.querySelector('#dm')
    var cm = window.document.querySelector('#cm')
    var mm = window.document.querySelector('#mm')

    comentar.innerHTML = `<strong>A distancia de ${metro} metros, corresponde a.....</strong>`

    km.innerHTML = `<strong>${quilometro} km</strong>`
    hm.innerHTML = `<strong>${hectometro} hm</strong>`
    dam.innerHTML = `<strong>${decametro} dam</strong>`
    dm.innerHTML = `<strong>${decimetros} dm</strong>`
    cm.innerHTML = `<strong>${centimetros} cm</strong>`
    mm.innerHTML = `<strong>${milimetros} mm</strong>`
}