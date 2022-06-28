function conversor() {
    var cotacaoDolar = Number(window.prompt('Antes de mais nada, quanto está a contação do dolar hoje: '))
    var dinheiroCarteira = Number(window.prompt('Quantos R$ vocẽ tem na carteira: '))
    var dolar = dinheiroCarteira / cotacaoDolar
    var resultado = window.document.querySelector('#paragrafo2')
    resultado.innerHTML = `<strong>Você terá um total de dolar igual a ${dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USS'})}</strong>`
}