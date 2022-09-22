class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
  }

  abastecer(l) {
    this.gasolinaRestante += l;
  }
}

let carro = new Carro("VW", "Azul", 100, 13);

console.log(carro);

carro.dirigir(1000);
console.log(carro);

carro.abastecer(50);
console.log(carro);
