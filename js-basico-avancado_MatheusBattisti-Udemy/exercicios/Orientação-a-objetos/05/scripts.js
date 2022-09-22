class Conta {
  constructor(saldoCC, saldoCP, juros) {
    this.saldoCC = saldoCC;
    this.saldoCP = saldoCP;
    this.juros = juros;
  }

  deposito(valor) {
    this.saldoCC += valor;
  }

  saque(valor) {
    this.saldoCC -= valor;
  }

  transferenciaCP(valor) {
    this.saldoCC -= valor;
    this.saldoCP += valor;
  }

  transferenciaCC(valor) {
    this.saldoCP -= valor;
    this.saldoCC += valor;
  }

  jurosAniversario() {
    let juros = (this.saldoCP * this.juros) / 100;
    this.saldoCP += juros;
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCC, saldoCP, juros) {
    super(saldoCC, saldoCP, juros * 2);
  }
}

let conta = new Conta(100, 1500, 1);
console.log(conta);

conta.saque(50);
console.log(conta);

conta.deposito(4500);
console.log(conta);

conta.transferenciaCP(550);
console.log(conta);

conta.jurosAniversario();
console.log(conta);

let contaEspecial = new ContaEspecial(1500, 10000, 1);
console.log(contaEspecial);

contaEspecial.saque(500);
console.log(contaEspecial);

contaEspecial.deposito(5000);
console.log(contaEspecial);

contaEspecial.transferenciaCP(5000);
console.log(contaEspecial);

contaEspecial.jurosAniversario();
console.log(contaEspecial);
