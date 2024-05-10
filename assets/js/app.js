// 1º Gerar número randomico e armazenar em uma variável
// Arredondar número com o Math.floor
// número do computador VS número do usuário

let machineNumber;

// Ao carregar a página o computador escolhe um número
function initialize() {
  machineNumber = Math.floor(Math.random() * 100 + 1);
  console.log(machineNumber);
}
