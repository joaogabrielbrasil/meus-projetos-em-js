function desconto() {
    var produto = window.prompt('Qual produto que você está comprando: ')
    var preco = Number(window.prompt('Qual o preco do produto que você quer comprar: '))
    var desconto = preco * 10 / 100
    var valorAtualPreco = preco - desconto
    var msg1 = window.document.querySelector('#msg1')
    var msg2 = window.document.querySelector('#msg2')
    var msg3 = window.document.querySelector('#msg3')
    var msg4 = window.document.querySelector('#msg4')
    msg1.innerHTML = `<strong>Calculando 10% de desconto para ${produto}</strong>`

    msg2.innerHTML = `<strong>O preco original era ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</strong>`

    msg3.innerHTML = `<strong>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto</strong>`

    msg4.innerHTML = `<strong>No fim, você vai pagar ${valorAtualPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, no(na) ${produto}</strong>`
}