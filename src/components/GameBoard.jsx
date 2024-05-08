import { useState } from "react";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

function GameBoard () {
    const [gameBoard , setGameBoard] = useState(initialGameBoard);
    function handleSelectSquare(rowIndex , colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        })
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex) => <li key={rowIndex}>
                <ol>
                {row.map((col , colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex , colIndex)}>{col}</button></li> )}
                </ol>
            </li> )}
        </ol>
    )
}
export default GameBoard;