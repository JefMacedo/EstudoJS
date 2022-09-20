function verificaTipoDeDado(dado) {
  if (typeof dado === "string") {
    console.log("Este dado é uma string!");
  } else if (typeof dado === "number") {
    console.log("Este dado é um número!");
  } else if (typeof dado === "boolean") {
    console.log("Este dado é um boolean!");
  }
}

verificaTipoDeDado(true);
verificaTipoDeDado(53);
verificaTipoDeDado("Teste");
