function calcTroco() {
    var produto = window.prompt('Que produto você está comprando: ')
    var valorProduto = window.prompt(`Quanto custa o(a) ${produto} que você está comprando: `)
    var dinheiro = window.prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}: `)
    var troco = dinheiro - valorProduto

    if (dinheiro < valorProduto) {
        window.alert('Compra não realizada , dinheiro insuficiente.')
    } else{
        window.alert(`Comprar realizada com sucesso! Você receberá ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de troco.`)
    }
}