const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: Adidas"));
console.log(validaMarca.test("Marca: Puma"));
console.log(validaMarca.test("Marca: Asics"));
console.log(validaMarca.test("Marca: "));
console.log(validaMarca.test("Nike"));
console.log(validaMarca.test("123456"));
console.log(validaMarca.test("Marca: Olimpikus"));
console.log(validaMarca.test("Marca: Mormaii"));
console.log(validaMarca.test("Marca: Havaianas"));
console.log(validaMarca.test("Marca: Panema"));
console.log(validaMarca.test("Marca: Asics"));
