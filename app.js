function numeroConsole(){
    console.log('O botão foi clicado');
}

function euAmoJS(){
    alert('Eu amo JS');
}

function cidadeDoBrasil() {
let cidade = prompt("Qual cidade brasileira você gostaria de conhecer?");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let primeiroNumero = Number(prompt('Digite um número para somar'));
    let segundoNumero = Number(prompt('Digite outro número para somar com o número anterior'));

    let total = primeiroNumero + segundoNumero;

    alert(`${primeiroNumero} + ${segundoNumero} = ${total} `)
}