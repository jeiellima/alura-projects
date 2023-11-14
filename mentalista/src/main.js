
let numero = parseInt(Math.round() * 100 + 1);

while (adivinha != numero) {
    let adivinha = Number(prompt('Adivinhe um número de 1 a 100:'));
    if (adivinha == numero) { 
        alert('Você acertou!');
    } else if (adivinha > numero) {
        alert('Errou, o número secreto é menor');
    } else if (adivinha < numero) {
        alert('Errou, o número secreto é maior');
    }
}

