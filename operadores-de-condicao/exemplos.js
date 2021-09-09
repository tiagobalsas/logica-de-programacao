const numero = 10;
//Se a condição for verdadeira, retorna o log.
if (numero >= 0) {
  console.log('Sim, o número é maior que zero!');
}

// se a condição for verdareira, a validação para no primeiro log e imprime uma mensagem
// Se não, executa a instrução dentro do else e imprime uma mensagem.
const a = 5.1;
if (a > 0 && a <= 5) {
  console.log('O Valor de (a) está entre 1 e 5');
} else {
  console.log('O Valor de (a) é maior que 5');
}

// Enquanto a condição não for atendida, a validação só para na última instrução, else
const b = 20;
if (b > 0 && b < 5) {
  console.log('Primeira condição é verdadeira... parei por aqui :) ');
} else if (b >= 5 && b < 10) {
  console.log(
    'A primeira condição não é verdadeira, MAS A SEGUNDA SIM... parei por aqui :) '
  );
} else if (b >= 10 && b < 20) {
  console.log(
    'Nem a primeira, nem a segunda são verdadeiras, MAS  A TECEIRA SIM... parei por aqui :) '
  );
} else {
  console.log('Nenhuma das condições foram atendidas... :( ');
}

// Se uma das condições for atendida, imprime o log.
const x = 'Verdadeiro';
const y = 2;
if (x === 'Verdadeiro' || y >= 2) {
  console.log('Uma das condições são verdadeiras');
}
