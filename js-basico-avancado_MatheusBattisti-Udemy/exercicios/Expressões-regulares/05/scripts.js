const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("jeferson"));
console.log(validarNomeUsuario.test("jef_123"));
console.log(validarNomeUsuario.test("jef"));
console.log(validarNomeUsuario.test("je"));
console.log(validarNomeUsuario.test("Jeferson"));
console.log(validarNomeUsuario.test("jeferson_jenrique"));
