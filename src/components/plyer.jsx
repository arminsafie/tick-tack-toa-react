import { useState } from "react";

export default function Player({
  playerName,
  playerSymbol,
  isActive,
  onChangeName,
}) {
  const [playername, setPlayername] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);
  function HandleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(Symbol, playername);
    }
  }
  function handleChange(event) {
    setPlayername(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playername}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playername} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={HandleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
