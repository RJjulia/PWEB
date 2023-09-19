var nome;
var nota1;
var nota2;
var nota3;

nome = prompt("Digite o seu nome: ");

alert("Nome: " + nome);

nota1 = prompt("Digite a nota 1: ");
nota2 = prompt("Digite a nota 2: ");
nota3 = prompt("Digite a nota 3: ");

var nota1 = parseFloat(nota1);
var nota2 = parseFloat(nota2);
var nota3 = parseFloat(nota3);

var media = (nota1 + nota2 + nota3) / 3;

alert("Sua média é: " + media.toFixed(2));