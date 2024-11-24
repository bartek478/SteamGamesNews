import './Game.css';

function Game({ param }) {
  return (
  <div class="card">
    <div class="card-body">
      <h5>{param.name}</h5>
    </div>
  </div>
  );
}

export default Game;