let names = ["João", "José", "Maria", "Marcos", "Pedro", "Lucas"];
let cities = ["Cuiabá", "Nobre", "Rosário Oeste"];

function verificaElementosArray(arr) {
  if (arr.length > 5) {
    console.log("Muitos elementos!");
  } else {
    console.log("Poucos elementos!");
  }
}

verificaElementosArray(cities);
verificaElementosArray(names);
