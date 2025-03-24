var nome = prompt("Insira seu nome: ");
var nota1 = parseFloat(prompt("Insira a nota 1: "));
var nota2 = parseFloat(prompt("Insira a nota 1: "));
var nota3 = parseFloat(prompt("Insira a nota 1: "));
var nota4 = parseFloat(prompt("Insira a nota 1: "));

var media = (nota1+nota2+nota3+nota4)/4;
alert("Aluno: "+ nome +"\nNota 1: "+ nota1 +"\nNota 2: "+ nota2 +
      "\nNota 3: "+ nota3 + "\nNota 4: "+ nota4 + "\nMédia: "+ media);