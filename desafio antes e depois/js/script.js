function botao() {
    var n = Number(window.prompt('Digite um numero inteiro qualquer: '))
    var antecessor = n - 1
    var sucessor = n + 1
    window.alert(`O antecessor de ${n} é ${antecessor} , e o sucessor de ${n} é ${sucessor}`)
}