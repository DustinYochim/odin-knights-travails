function knightMoves(start, end) {}

// Creates 8x8 Chessboard
function createBoard() {
  let board = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push([i, j]);
    }
  }
  return board;
}

// Generates all moves from current location
function getMoves(location) {
  const moves = [];
  moves.push([location[0] + 1, location[1] - 2]);
  moves.push([location[0] + 1, location[1] + 2]);
  moves.push([location[0] - 1, location[1] - 2]);
  moves.push([location[0] - 1, location[1] + 2]);
  moves.push([location[0] + 2, location[1] - 1]);
  moves.push([location[0] + 2, location[1] + 1]);
  moves.push([location[0] - 2, location[1] - 1]);
  moves.push([location[0] - 2, location[1] + 1]);
  return moves;
}

// Returns only moves that are valid on the board
function checkMoves(moves) {
  return moves.filter((move) => {
    return move[0] >= 1 && move[0] <= 8 && move[1] >= 1 && move[1] <= 8;
  });
}

console.log(knightMoves([0, 0], [3, 3]));
