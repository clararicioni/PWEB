var opcaoUsuario = prompt("Insira a sua opção: pedra, papel ou tesoura.");
var respostaComputador = (Math.random()).toFixed(1);
var opcaoComputador;

if(respostaComputador < 0.3){
    opcaoComputador = "pedra";
} else if (respostaComputador < 0.6){
    opcaoComputador = "papel";
} else if (respostaComputador <= 0.9){
    opcaoComputador = "tesoura";
}

alert("Sua opção: "+opcaoUsuario+ "\nValor do round: "+respostaComputador+"\nOpcao do computador: "+opcaoComputador);

if(opcaoUsuario === opcaoComputador){
    alert("Empate!");
}
if(opcaoUsuario === "pedra" && opcaoComputador === "tesoura"){
    alert("Usuário ganhou!");
} else
if(opcaoUsuario === "papel" && opcaoComputador === "pedra"){
    alert("Usuário ganhou!");
} else
if(opcaoUsuario === "tesoura" && opcaoComputador === "papel"){
    alert("Usuário ganhou!");
}
if(opcaoComputador === "pedra" && opcaoUsuario === "tesoura"){
    alert("Computador ganhou!");
} else
if(opcaoComputador === "papel" && opcaoUsuario === "pedra"){
    alert("Computador ganhou!");
} else
if(opcaoComputador === "tesoura" && opcaoUsuario === "papel"){
    alert("Computador ganhou!");
}