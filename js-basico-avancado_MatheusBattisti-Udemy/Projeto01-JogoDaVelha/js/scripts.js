let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageTxt = document.querySelector("#message p");
let secondPLayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adcionando o evento de clique aos boxes
for (let i = 0; i < boxes.length; i++) {
  //quando alguém clica na caixa
  boxes[i].addEventListener("click", function () {
    let el = checkEl(player1, player2);

    //verifica se já tem X ou O
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      if (player1 == player2) {
        player1++;

        // confirma se é IA jogando
        if (secondPLayer == "ai-player") {
          computerPlayer();
          player2++;
        }
      } else {
        player2++;
      }

      checkWinCondition();
    }
  });
}

// evento para saber se é dois players ou IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPLayer = this.getAttribute("id");
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 150);
  });
}

// Verifica quem vai jogar
function checkEl(player1, player2) {
  if (player1 == player2) {
    //x
    el = x;
  } else {
    //o
    el = o;
  }
  return el;
}

// TODO Melhorar a validação de vitória
//checa quem venceu
function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //   let b1Child = b1.childNodes[0].className;
  //   let b2Child = b2.childNodes[0].className;
  //   let b3Child = b3.childNodes[0].className;
  //   let b4Child = b4.childNodes[0].className;
  //   let b5Child = b5.childNodes[0].className;
  //   let b6Child = b6.childNodes[0].className;
  //   let b7Child = b7.childNodes[0].className;
  //   let b8Child = b8.childNodes[0].className;
  //   let b9Child = b9.childNodes[0].className;

  //   console.log(
  //     b1Child,
  //     b2Child,
  //     b3Child,
  //     b4Child,
  //     b5Child,
  //     b6Child,
  //     b7Child,
  //     b8Child,
  //     b9Child
  //   );

  // Verifica o vencendor nas HORIZONTAIS
  // Verifica na PRIMEIRA horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      console.log("X venceu na primeira horizontal");
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      console.log("O venceu na primeira horizontal");
      declareWinner("o");
    }
  }

  // Verifica na SEGUNDA horizontal
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      console.log("X venceu na segunda horizontal");
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      console.log("O venceu na segunda horizontal");
      declareWinner("o");
    }
  }

  // Verifica na TERCEIRA horizontal
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      console.log("X venceu na terceira horizontal");
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      console.log("O venceu na terceira horizontal");
      declareWinner("o");
    }
  }

  // Verifica o vencendor nas VERTICAIS
  // Verifica na PRIMEIRA vertical
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      console.log("X venceu na primeira vertical");
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      console.log("O venceu na primeira vertical");
      declareWinner("o");
    }
  }

  // Verifica na SEGUNDA vertical
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      console.log("X venceu na SEGUNDA vertical");
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      console.log("O venceu na SEGUNDA vertical");
      declareWinner("o");
    }
  }

  // Verifica na TERCEIRA vertical
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      console.log("X venceu na TERCEIRA vertical");
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      console.log("O venceu na TERCEIRA vertical");
      declareWinner("o");
    }
  }

  // Verifica o vencendor nas DIAGONAIS
  // Verifica na PRIMEIRA diagonal
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      console.log("X venceu na PRIMEIRA diagonal");
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      console.log("O venceu na PRIMEIRA diagonal");
      declareWinner("o");
    }
  }

  // Verifica na SEGUNDA diagonal
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      console.log("X venceu na SEGUNDA diagonal");
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      console.log("O venceu na SEGUNDA diagonal");
      declareWinner("o");
    }
  }

  // Deu velha
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    console.log("Deu Velha");
    declareWinner("#");
  }
}

// Limpa o jogo, declara o vencendor e atualiza o placar
function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");

  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    console.log("O Jogador 1 Venceu!");
    msg = "O Jogador 1 Venceu!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    console.log("O Jogador 2 Venceu!");
    msg = "O Jogador 2 Venceu!";
  } else {
    console.log("Deu velha maluco!");
    msg = "Deu Velha";
  }

  // Exibe a mensagem
  messageTxt.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // Esconde a mensagem
  setTimeout(function () {
    messageContainer.classList.add("hide");
  }, 3200);

  //zera as jogadas
  player1 = 0;
  player2 = 0;

  //remove X e O
  let boxesToRemove = document.querySelectorAll(".box div");
  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

// Lógica da IA
function computerPlayer() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    // Só preenche se o campo está vazio
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      // checagem de quantos campos estão preenchidos
    } else {
      filled++;
    }
  }

  if (counter == 0 && filled < 9) {
    computerPlayer();
  }
}
