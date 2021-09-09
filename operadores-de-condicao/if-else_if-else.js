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
// Retorna Boa tarde!
const hora = 17;
if (hora >= 0 && hora <= 11) {
  console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17) {
  console.log('Boa tarde!');
}

// Retorna Boa noite!
const hora = 23;
if (hora >= 0 && hora <= 11) {
  console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}
