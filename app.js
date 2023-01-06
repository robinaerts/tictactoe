let turn = "X";
let board;
const domBoard = document.getElementById("board");
const domWinner = document.getElementById("winner");

const makeMove = (e) => {
  const thisTurn = turn;
  const row = e.target.id.substring(4, 5);
  const col = e.target.id.substring(5, 6);
  if (board[row][col] === undefined) {
    board[row][col] = turn;
    e.target.innerHTML = turn;
    if (turn === "X") {
      turn = "O";
      document.body.style.cursor = `url(./o.png), auto`;
      document.body.style.background = "antiquewhite";
      reset.style.background = "#d6bea8";
    } else {
      turn = "X";
      reset.style.background = "rgb(194, 229, 253)";
      document.body.style.background = "aliceblue";
      document.body.style.cursor = `url(./x.png), auto`;
    }
  }
  if (checkForWin(board, thisTurn)) endGame(thisTurn);
};

const newGame = () => {
  board = [[], [], []];
  turn = "X";
  domWinner.innerText = "";
  document.body.style.cursor = `url(./x.png), auto`;
  document.body.style.background = "aliceblue";
  domBoard.innerHTML = `<tr>
    <td id="cell00"></td>
    <td id="cell01"></td>
    <td id="cell02"></td>
    </tr>
    <tr>
    <td id="cell10"></td>
    <td id="cell11"></td>
    <td id="cell12"></td>
    </tr>
    <tr>
    <td id="cell20"></td>
    <td id="cell21"></td>
    <td id="cell22"></td>
  </tr>`;
  domBoard.addEventListener("click", makeMove);
};

const reset = document.getElementById("restart");
reset.addEventListener("click", newGame);
newGame();

const endGame = (winner) => {
  domBoard.removeEventListener("click", makeMove);
  document.body.style.curor = "default";
  domWinner.innerText = `${winner} wins!`;
};

const checkForWin = (board, player) => {
  if (
    board[0][0] === player &&
    board[0][1] === player &&
    board[0][2] === player
  )
    return true;
  if (
    board[1][0] === player &&
    board[1][1] === player &&
    board[1][2] === player
  )
    return true;
  if (
    board[2][0] === player &&
    board[2][1] === player &&
    board[2][2] === player
  )
    return true;
  if (
    board[0][0] === player &&
    board[1][0] === player &&
    board[2][0] === player
  )
    return true;
  if (
    board[0][1] === player &&
    board[1][1] === player &&
    board[2][1] === player
  )
    return true;
  if (
    board[0][2] === player &&
    board[1][2] === player &&
    board[2][2] === player
  )
    return true;
  if (
    board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player
  )
    return true;
  if (
    board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player
  )
    return true;
  return false;
};
