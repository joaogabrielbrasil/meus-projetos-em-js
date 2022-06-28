function conversor() {
    var celsius = Number(window.prompt('Digite uma temperatura em ºC Celsius: '))
    var fahrenheit = 1.8 * celsius + 32
    var kelvin = celsius + 273 
    var ponto = window.document.querySelector('#ponto')
    var tkelvin = window.document.querySelector('#kelvin')
    var tfahrenheit = window.document.querySelector('#fahrenheit')

    ponto.innerHTML = `<strong id="pagjs">A temperatura de ${celsius}ºC, corresponde a .....</strong>`

    tkelvin.innerHTML = `<strong id="pagjs">${kelvin}ºK</strong>`
    tfahrenheit.innerHTML = `<strong id="pagjs">${fahrenheit}ºF</strong>`
}