// if (condição) afirmação1

// Não retorna a mensagem.
const hora = 12;
if (hora < 12) {
  console.log('Bom dia!');
}

// Retorna Bom dia!
const hora = 11;
if (hora < 12) {
  console.log('Bom dia!');
}

// Retorna Bom dia!
const hora = 12;
if (hora <= 12) {
  console.log('Bom dia!');
}

// if (condição) afirmação1 [else afirmação2]

// Retorna não é bom dia!
const hora = 12;
if (hora < 12) {
  console.log('Bom dia!');
} else {
  console.log('Não é bom dia!');
}
