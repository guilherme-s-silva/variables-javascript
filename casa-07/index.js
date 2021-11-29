let populacao = 1000;
let taxaDeTransmissao = 4;
let tempo = 100;
let pessoasInfectadas = populacao * (taxaDeTransmissao ** (tempo / 7));

console.log(`O número de pessoas infectadas é de ${pessoasInfectadas}`);