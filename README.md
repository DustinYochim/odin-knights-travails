# ♟️ odin-knights-travails ♟️

## Introduction

In this project, I addressed the Knight's Travails problem using JavaScript. The problem involves finding the shortest path for a knight in chess to move from one square to another on an 8x8 chessboard, considering the unique L-shaped movement pattern of the knight.

## Problem Description

A knight in chess can move to any square on the standard 8x8 chessboard from any other square, given enough turns. The basic move consists of two steps forward in one direction (vertical or horizontal) and one step to the side. The goal is to determine the shortest path that the knight can take to reach the target square on the chessboard.

## Solution Approach

To solve this problem, I employed the following steps using JavaScript:

1. **Node Representation**: I defined a `Node` function that takes a position and a path array. This function is used to create nodes representing possible knight positions while ensuring that they remain within the chessboard boundaries.

2. **Breadth-First Search (BFS)**: I implemented the `knightMoves` function using BFS. Starting from the initial position, I iteratively explored possible moves and generated a tree of positions. This approach ensures that the first path found is the shortest one.

3. **Generating Moves**: The `generateMoves` function calculates all possible moves from the current position of the knight, adhering to the L-shaped pattern.

4. **Path Output**: Once the BFS algorithm successfully finds the path, I displayed the result by indicating the number of moves taken and listing each square visited along the way.

## Code Example

Here's an example of how the `knightMoves` function works in JavaScript:

```javascript
// ... (Node and other functions)

knightMoves([0, 0], [3, 3]);
```

The output would resemble:

```javascript
=> You made it in 2 moves! Here's your path:
[0, 0]
[1, 2]
[3, 3]

```

## Conclusion

By employing JavaScript and the BFS algorithm, I successfully solved the Knight's Travails problem and determined the shortest path for the knight to move between squares on the chessboard. This project showcases my ability to apply graph search algorithms to real-world scenarios and demonstrates my proficiency in programming and problem-solving.

If you have any inquiries or would like to explore the full code implementation, please don't hesitate to contact me. I look forward to utilizing my algorithmic skills in future projects and challenges.
