let machineNumber;
let listNumbers = [];
let attempts = 0;
let maximumAttempts = 7;

// Executar o reaload toda vez que clico no botão -> gameButton no html
function newGame() {
  window.location.reload();
}

// Ao carregar a página o computador escolhe um número
function initialize() {
  machineNumber = Math.floor(Math.random() * 100 + 1);
  console.log(machineNumber);
}

function compareValues() {
  const userValue = Number(document.getElementById("inputBox").value);
  listNumbers.push(" " + userValue);
  document.getElementById("guesses").innerHTML = listNumbers;

  if ((userValue > 0) & (userValue <= 100)) {
    if (attempts < maximumAttempts) {
      if (userValue > machineNumber) {
        document.getElementById("guessBox").innerHTML =
          "Seu número é muito alto";
        document.getElementById("inputBox").value = "";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
      } else if (userValue < machineNumber) {
        document.getElementById("guessBox").innerHTML =
          "Seu número é muito baixo";
        document.getElementById("inputBox").value = "";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
      } else {
        document.getElementById("guessBox").innerHTML =
          "Parabéns! Você adivinhou 👏🥳";
        attempts++;
        document.getElementById("attempts").innerHTML = attempts;
        document
          .getElementById("inputBox")
          .setAttribute("Readonly", "Readonly");
      }
    } else {
      document.getElementById("guessBox").innerHTML =
        "Vish, você perdeu! 😵💀😢<br/> O número do compurador era " +
        machineNumber;
      document.getElementById("inputBox").setAttribute("Readonly", "Readonly");
    }
  } else {
    document.getElementById("guessBox").innerHTML =
      '<span style="color: red; font-size: 1rem">Invalid.</br> Escolha um número entre 1 e 100.</span>';
  }
}

// número do computador VS número do usuário

// 1º Gerar número randomico e armazenar em uma variável
// Arredondar número com o Math.floor

// 2º Armazenar número do usuário em array

// 3º Verificar se o userValue é maior ou menor que o machineNumber

// 4º Reiniciar campo de input para limpar valor ao dar enter

// 5º número de tentativas aumentar +1

// 6º Adicionar máximo de tentativas

// 7º Usar o atributo setAttribute do tipo Readonly com string Readonly para desabilitar o campo de input quando o jogo acaba se eu acerto ou erro
