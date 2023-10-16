function Retangulo(x, y){
    this.base = x;
    this.altura = y;

    this.calcArea = function(){
        alert ("Base = " + this.base + " Altura = " + this.altura + " = " + (this.altura * this.base));
    }
}

var objRet = new Retangulo(10, 20);
objRet.calcArea();

function Conta(){
    var nomeCorrentista;
    var banco;
    var numConta;
    var saldo;

    this.setNomeCorrentista = function(nomeCorrentista){
        this.nomeCorrentista = nomeCorrentista;
    };

    this.setBanco = function(banco){
        this.banco = banco;
    };

    this.setNumConta= function(numConta){
        this.numConta = numConta;
    };

    this.setSaldo = function(saldo){
        this.saldo = saldo;
    };

    this.getNomeCorrentista = function(){
        return this.nomeCorrentista;
    };

    this.getBanco = function(){
        return this.banco;
    };

    this.getNumConta = function(){
        return this.numConta;
    };

    this.getSaldo = function(){
        return this.saldo;
    };
}

function Corrente(){
    var saldoEspecial;

    this.setSaldoEspecial = function(saldoEspecial){
        this.saldoEspecial = saldoEspecial;
    };

    this.getSaldoEspecial = function(){
        return this.saldoEspecial;
    };
}

function Poupança(){
    var juros;
    var dataVencimento;

    this.setJuros = function(juros){
        this.juros = juros;
    };

    this.setDataVencimento = function(dtVenc){
        this.dataVencimento = dataVencimento;
    };

    this.getJuros = function(){
        return this.juros;
    };

    this.getDataVencimento = function(){
        return this.dataVencimento;
    };
}

Corrente.prototype = new Conta();
Poupança.prototype = new Conta();

objCorrente = new Corrente();
objCorrente.setNomeCorrentista("Julia Rodrigues");
objCorrente.setBanco("Bradesco");
objCorrente.setNumConta("12345678");
objCorrente.setSaldo(3500);
objCorrente.setSaldoEspecial(950);

objPoupanca = new Poupança();
objPoupanca.setNomeCorrentista("Denilce");
objPoupanca.setBanco("Itau");
objPoupanca.setNumConta("9999999999");
objPoupanca.setSaldo(45400);
objPoupanca.setJuros(1.6);
objPoupanca.setDataVencimento("18/08/2025");

alert("Conta Corrente \n\n" + " Nome: " + objCorrente.getNomeCorrentista() + "\n Banco: " + objCorrente.getBanco() + "\n Numero da Conta: " + objCorrente.getNumConta() + "\n Saldo: R$" + objCorrente.getSaldo() + "\n Saldo Especial: R$" + objCorrente.getSaldoEspecial());

alert("Conta Poupança \n\n" + " Nome: " + objPoupanca.getNomeCorrentista() + "\n Banco: " + objPoupanca.getBanco() + "\n Numero da Conta: " + objPoupanca.getNumConta() + "\n Saldo: R$" + objPoupanca.getSaldo() + "\n Juros: " + objPoupanca.getJuros() + "%" + "\n Data de Vencimento: " + objPoupanca.getDataVencimento());