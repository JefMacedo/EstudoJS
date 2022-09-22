let onibus = {
  rodas: 8,
  limitePassageiro: 40,
  portas: 2,
};

console.log(onibus.rodas);
console.log(onibus.limitePassageiro);
console.log(onibus.portas);
console.log(onibus);

delete onibus.rodas;
console.log(onibus.rodas);

onibus.janelas = 20;

console.log(onibus.janelas);
console.log(onibus);
