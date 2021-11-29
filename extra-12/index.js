let montante = 90000;
let capital = 60000;
let numeroPeriodos = 24;
let taxaDeJuros = Math.pow(montante / capital, 1 / numeroPeriodos) - 1;
taxaDeJuros = taxaDeJuros * 100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(3)}%, pois após ${numeroPeriodos} meses você teve que pagar ${montante} reais`);