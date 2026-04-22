let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
let opcao = parseInt(prompt(
    "Forma de pagamento:\n1 - PIX à vista\n2 - Cartão (até 24x)\n3 - Financiamento (até 48x)"
));

let valorFinal;
let parcelas;
let valorParcela;

if (opcao === 1) {
    valorFinal = valorCarro * 0.85;
    alert(`Valor final: R$ ${valorFinal.toFixed(2)}`);
} 
else if (opcao === 2) {
    valorFinal = valorCarro * 1.05;
    parcelas = parseInt(prompt("Quantidade de parcelas (até 24):"));
    valorParcela = valorFinal / parcelas;

    alert(`Valor final: R$ ${valorFinal.toFixed(2)}\n
    Parcelas: ${parcelas}\nValor por parcela: R$ ${valorParcela.toFixed(2)}`);
} 
else if (opcao === 3) {
    valorFinal = valorCarro * 1.20;
    parcelas = parseInt(prompt("Quantidade de parcelas (até 48):"));
    valorParcela = valorFinal / parcelas;

    alert(`Valor final: R$ ${valorFinal.toFixed(2)}\nParcelas: ${parcelas}\nValor por parcela: R$ ${valorParcela.toFixed(2)}`);
} 
else {
    alert("Opção inválida!");
}