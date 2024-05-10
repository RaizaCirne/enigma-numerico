// número do computador VS número do usuário

// 1º Gerar número randomico e armazenar em uma variável
// Arredondar número com o Math.floor

// 2º Armazenar número do usuário em array

// 3º Verificar se o userValue é maior ou menor que o machineNumber

let machineNumber;
let listNumbers = [];

// Ao carregar a página o computador escolhe um número
function initialize() {
  machineNumber = Math.floor(Math.random() * 100 + 1);
  console.log(machineNumber);
}

function compareValues() {
  const userValue = Number(document.getElementById("inputBox").value);
  listNumbers.push(" " + userValue);
  document.getElementById("guesses").innerHTML = listNumbers;

  if (userValue > machineNumber) {
    document.getElementById("guessBox").innerHTML = "Seu número é muito alto";
  } else if (userValue < machineNumber) {
    document.getElementById("guessBox").innerHTML = "Seu número é muito baixo";
  } else {
    document.getElementById("guessBox").innerHTML =
      "Parabéns! Você adivinhou 👏🥳";
  }
}
