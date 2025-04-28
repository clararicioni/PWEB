//1.
class Retangulo {
    constructor() {
        this.base;
        this.altura;
    }
    calcArea(x, y) {
        this.base = x;
        this.altura = y;
        return x * y;
    }
}
var base = prompt("Digite o valor da base do retângulo:");
var altura = prompt("Digite o valor da altura do retângulo:");
var objRetangulo = new Retangulo(base, altura);
var resultado = objRetangulo.calcArea(Number(base), Number(altura))
console.log("Área do retângulo: " + resultado);

// 2.
class Conta {
    constructor(nomeCorrentista, banco, numConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numConta = numConta;
        this.saldo = saldo;
    }

    getNomeCor() {
        return this.nomeCorrentista;
    }
    getBanco() {
        return this.banco;
    }
    getNumConta() {
        return this.numConta;
    }
    getSaldo() {
        return this.saldo;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numConta, saldo, saldoEsp) {
        super(nomeCorrentista, banco, numConta, saldo);
        this.saldoEsp = saldoEsp;
    }

    getSaldoEsp() {
        return this.saldoEsp;
    }
}

var nome = prompt("Digite o nome do correntista:");
var banco = prompt("Digite o nome do banco:");
var numConta = prompt("Digite o número da conta:");
var saldo = prompt("Digite o saldo da conta:");
var saldoEsp = prompt("Digite o saldo especial:");

var objCorrente = new Corrente(nome, banco, numConta, Number(saldo), Number(saldoEsp));

console.log("\n2.");
console.log("\nNome correntista: " + objCorrente.getNomeCor() +
    "\nBanco: " + objCorrente.getBanco() +
    "\nNum. conta: " + objCorrente.getNumConta() +
    "\nSaldo: " + objCorrente.getSaldo() +
    "\nSaldo especial: " + objCorrente.getSaldoEsp());

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numConta, saldo, poupJuros, dtVencimento) {
        super(nomeCorrentista, banco, numConta, saldo);
        this.poupJuros = poupJuros;
        this.dtVencimento = dtVencimento;
    }
    getPoupJuros() {
        return this.poupJuros;
    }
    getDtVencimento() {
        return this.dtVencimento;
    }
}

var nome = prompt("Digite o nome:");
var banco = prompt("Digite o nome do banco:");
var numConta = prompt("Digite o número da conta:");
var saldo = prompt("Digite o saldo da conta:");
var juros = prompt("Digite a taxa de juros:");
var dtVencimento = prompt("Digite a data de vencimento:");

var objPoupanca = new Poupanca(nome, banco, numConta, Number(saldo), juros, dtVencimento);

console.log("\nNome poupança: " + objPoupanca.getNomeCor() +
    "\nBanco: " + objPoupanca.getBanco() +
    "\nNum. conta: " + objPoupanca.getNumConta() +
    "\nSaldo: " + objPoupanca.getSaldo() +
    "\nTaxa de juros: " + objPoupanca.getPoupJuros()+"%" +
    "\nData de vencimento: "+objPoupanca.getDtVencimento());
