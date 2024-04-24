function calcularPagamento(precoTabela, numeroParcelas) {
    let valorParcela;
    let precoTotal;

    if (numeroParcelas === 1) {
        precoTotal = precoTabela * 0.975; 
        valorParcela = precoTotal;
    }
   
    else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
        precoTotal = precoTabela;
        valorParcela = precoTotal / numeroParcelas;
    }

    else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
        precoTotal = precoTabela * 1.06; 
        valorParcela = precoTotal / numeroParcelas;
    }
  
    else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
        precoTotal = precoTabela * 1.13; 
        valorParcela = precoTotal / numeroParcelas;
    } else {
        console.log("Número de parcelas inválido.");
        return;
    }
    return {
        valorParcela: valorParcela.toFixed(1),
        precoTotal: precoTotal.toFixed(1)
    };
}
const precoTabela = 128; 
const numeroParcelas = 14; 
const resultado = calcularPagamento(precoTabela, numeroParcelas);

console.log("Valor de cada parcela:", resultado.valorParcela, "reais");
console.log("Preço total da compra:", resultado.precoTotal, "reais");