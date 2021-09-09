// (E lógico) - AND lógico (&&) - Todas expressões devem ser verdadeira para atender uma condição, caso contrário retorna falso e a checagem do código se encerra.

// // (OU lógico) - OU lógico (||) - Se uma das expressões for verdadeira, a condição será atendida e a checagem do código continua. Só será falsa, quando todas as condições forem falsas. 

/* Avaliação de curto-circuito
Como expressões lógicas são avaliadas da esquerda para a direita, elas são testadas como possíveis avaliações de "curto-circuito" utilizando as seguintes regras:

false && qualquercoisa é avaliado em curto-circuito como falso.
true || qualquercoisa é avaliado em curto-circuito como verdadeiro.
As regras de lógica garantem que estas avaliações estejam sempre corretas. Repare que a parte qualquercoisa das expressões acima não é avaliada, de forma que qualquer efeito colateral de fazê-lo não produz efeito algum. 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#:~:text=Avalia%C3%A7%C3%A3o%20de%20curto,produz%20efeito%20algum.
*/

// Exemplos de valores falsy em JavaScript:
// (false) - falso
// (null) - nulo
// (undefined)
// (0) - zero
// (NaN) 
// ('') - String Vazia