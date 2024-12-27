import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" buttonText="Edit" />
          <Player name="Player 2" symbol="O" buttonText="Edit" />
        </ol>
      </div>
    </main>
  );
}

export default App;
