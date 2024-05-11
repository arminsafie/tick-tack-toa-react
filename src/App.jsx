import { useState } from "react";
import GameBoarde from "./components/GameBoarde";
import Player from "./components/plyer";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning_combinations";
import GameOver from "./components/GameOver";
function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
const GameBoardeGrid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
  const activePlayer = driveActivePlayer(gameTurns);

  let gameBoarde = [...GameBoardeGrid.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { squere, player } = turn;
    const { row, col } = squere;
    gameBoarde[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquerSymbol =
      gameBoarde[combination[0].row][combination[0].column];
    const secSquerSymbol =
      gameBoarde[combination[1].row][combination[1].column];
    const thirdSquerSymbol =
      gameBoarde[combination[2].row][combination[2].column];
    if (
      firstSquerSymbol &&
      firstSquerSymbol === secSquerSymbol &&
      firstSquerSymbol === thirdSquerSymbol
    ) {
      winner = players[firstSquerSymbol];
    }
  }
  const hasDrow = gameTurns.length === 9 && !winner;

  function handleSlectGrid(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prvTurns) => {
      const currentPlayer = driveActivePlayer(prvTurns);

      const updateTurns = [
        { squere: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prvTurns,
      ];
      return updateTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prvPlayer) => {
      return {
        ...prvPlayer,
        [symbol]: newName,
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="player 1"
            playerSymbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            playerName="player 2"
            playerSymbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDrow) && (
          <GameOver winner={winner} onSelect={handleRestart} />
        )}
        <GameBoarde onSelectSquaer={handleSlectGrid} board={gameBoarde} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
