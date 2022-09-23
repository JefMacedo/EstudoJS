const validarId = /\d+ID\b/;

console.log(validarId.test("123123ID"));
console.log(validarId.test("123123id"));
console.log(validarId.test("123123"));
console.log(validarId.test("ID"));
console.log(validarId.test("asdasdID"));
console.log(validarId.test("ASDID"));
