// número do computador VS número do usuário

// 1º Gerar número randomico e armazenar em uma variável
// Arredondar número com o Math.floor

// 2º Armazenar número do usuário em array

// 3º Verificar se o userValue é maior ou menor que o machineNumber

// 4º Reiniciar campo de input para limpar valor ao dar enter

// 5º número de tentativas aumentar +1

let machineNumber;
let listNumbers = [];
let attempts = 0;

// Ao carregar a página o computador escolhe um número
function initialize() {
  machineNumber = Math.floor(Math.random() * 100 + 1);
  // console.log(machineNumber);
}

function compareValues() {
  const userValue = Number(document.getElementById("inputBox").value);
  listNumbers.push(" " + userValue);
  document.getElementById("guesses").innerHTML = listNumbers;

  if (userValue > machineNumber) {
    document.getElementById("guessBox").innerHTML = "Seu número é muito alto";
    document.getElementById("inputBox").value = "";
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;
  } else if (userValue < machineNumber) {
    document.getElementById("guessBox").innerHTML = "Seu número é muito baixo";
    document.getElementById("inputBox").value = "";
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;
  } else {
    document.getElementById("guessBox").innerHTML =
      "Parabéns! Você adivinhou 👏🥳";
    attempts++;
    document.getElementById("attempts").innerHTML = attempts;
  }
}
