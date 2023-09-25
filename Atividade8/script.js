document.getElementById("pedra").addEventListener("click", jogar);
document.getElementById("papel").addEventListener("click", jogar);
document.getElementById("tesoura").addEventListener("click", jogar);

function jogar(event){

  var escolhaUser = event.target.id;
  var escolhaMaquina = Math.floor(Math.random() * 3);

  let resultado = "";

  if(escolhaMaquina === 1)
    escolhaMaquina = "pedra";
  else if(escolhaMaquina === 2)
    escolhaMaquina = "papel";
  else 
    escolhaMaquina = "tesoura";

  if (escolhaUser === escolhaMaquina)
    resultado = "empatou!";
  else if ((escolhaUser === "pedra" && escolhaMaquina === "tesoura") || (escolhaUser === "papel" && escolhaMaquina === "pedra") || (escolhaUser === "tesoura" && escolhaMaquina === "papel"))
    resultado = "você ganhou!";  
  else
    resultado = "você perdeu!";

  alert("Você escolheu " + escolhaUser + ".\nO Computador escolheu " + escolhaMaquina + ". \n" + resultado);


}