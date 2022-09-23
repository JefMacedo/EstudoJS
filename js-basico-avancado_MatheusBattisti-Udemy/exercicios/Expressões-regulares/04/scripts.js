const validarIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validarIp.test("127.0.0.1"));
console.log(validarIp.test("127.0.1"));
console.log(validarIp.test("000000000000000"));
console.log(validarIp.test("aaa.aaa.aaa.aaa"));
console.log(validarIp.test("aaa"));
