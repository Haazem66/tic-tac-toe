import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";


function derivedActivePlayer(turns) {
  let currentPlayer = 'X'
  if (turns.length > 0 && turns[0].player === "X"){
    currentPlayer = "O"
  }
  return currentPlayer;
};



function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = derivedActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSqaure={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
