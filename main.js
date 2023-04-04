function Node(pos, path) {
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return null;
  }
  return { pos, path };
}

function knightMoves([x, y], [a, b]) {
  // Add the starting position node to the queue
  let q = [Node([x, y], [[x, y]])];
  let currentNode = q.shift();

  // While the current position != end position
  while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
    // Generate moves from current position
    let moves = generateMoves(currentNode);
    // Add valid moves to the queue
    moves.forEach((move) => {
      let node = Node(move, currentNode.path.concat([move]));
      if (node) {
        q.push(node);
      }
    });
    // Move to next node in the queue
    currentNode = q.shift();
  }
  // When loop exits, you arrived at destination
  console.log(
    `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`
  );
  console.log(currentNode.path);
}

function generateMoves(currentNode) {
  let moves = [
    [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
    [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
    [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
    [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
    [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
    [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
    [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
    [currentNode.pos[0] - 1, currentNode.pos[1] + 2],
  ];
  return moves;
}

knightMoves([0, 0], [3, 3]);
