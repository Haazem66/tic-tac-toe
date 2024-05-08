import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSqaure, turns }) {
  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // const [gameBoard , setGameBoard] = useState(initialGameBoard);
  // function handleSelectSquare(rowIndex , colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //         const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //         updatedGameBoard[rowIndex][colIndex] = symbolType;
  //         return updatedGameBoard;
  //     })
  //     onSelectSqaure();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSqaure(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
export default GameBoard;
