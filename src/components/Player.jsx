export default function Player({ name, symbol, buttonText }) {
  return (
    <li>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>{buttonText}</button>
    </li>
  );
}
