class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }

  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }

  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }

  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

let endereco = new Endereco("Rua 2", "Jardim 1", "Cuiabá", "MT");

console.log(endereco);

console.log("Troca de rua");
endereco.novaRua = "Rua 3";
console.log(endereco);

console.log("Troca de cidade");
endereco.novaCidade = "Varzea Grande";
console.log(endereco);

console.log("Troca de bairro");
endereco.novoBairro = "Américas";
console.log(endereco);

console.log("Troca de estado");
endereco.novoEstado = "AL";
console.log(endereco);
