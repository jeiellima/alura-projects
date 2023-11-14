let valorEmDolar = 4.8895;
let valor = Number(prompt('Digite o valor em dólar para conversão:'));
let valorReal = valorEmDolar * valor;

alert(`O valor em real é: R$${valorReal.toFixed(2)}`);