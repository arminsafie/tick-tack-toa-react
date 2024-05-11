export default function GameBoarde({ onSelectSquaer, board }) {
  // const [GameBoarde, setGameBoard] = useState(GameBoardeGrid);
  // function handleSlectGrid(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbole;
  //     return updatedBoard;
  //   });
  //   onSelectSquaer();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => {
        return (
          <li key={rowIdx}>
            <ol>
              {row.map((col, colIdx) => {
                return (
                  <li key={colIdx}>
                    <button
                      onClick={() => onSelectSquaer(rowIdx, colIdx)}
                      disabled={col !== null}
                    >
                      {col}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
