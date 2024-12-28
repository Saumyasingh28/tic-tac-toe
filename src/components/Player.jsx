import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((wasIsEditing) => !wasIsEditing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameContent = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerNameContent = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameContent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
