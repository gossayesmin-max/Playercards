import players from '../data/players.js';
import Player from './Player.jsx';

function PlayersList() {
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">

        {players.map((player) => (
          <div className="col-md-3" key={player.name}>
            <Player
              name={player.name}
              team={player.team}
              nationality={player.nationality}
              jerseyNumber={player.jerseyNumber}
              age={player.age}
              image={player.image}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default PlayersList;