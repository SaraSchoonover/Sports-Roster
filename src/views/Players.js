import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../App/components/PlayerCard';

// import StudentForm from '../StudentForm';

function Players({ players, setPlayers }) {
  return (
   <div className="this">
      <hr/>
      <h1>Players</h1>
       <div className="card-container">
       {players.map((playerInfo) => (
         <PlayerCard
         key={playerInfo.firebaseKey}
         firebaseKey={playerInfo.firebaseKey}
         name={playerInfo.name}
         position={playerInfo.position}
         imageUrl={playerInfo.imageUrl}
         setPlayers={setPlayers}
         />
       ))}
       </div>
       </div>
  );
}

// export default App;
Players.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func
};

export default Players;
