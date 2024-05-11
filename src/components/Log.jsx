export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.squere.row}${turn.squere.col}`}>
          {turn.player} slected {turn.squere.row},{turn.squere.col}
        </li>
      ))}
    </ol>
  );
}
