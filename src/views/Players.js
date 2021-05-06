import React from 'react';
import PropTypes from 'prop-types';

// import StudentForm from '../StudentForm';

function Players() {
  return (
   <>
      <hr/>
       <div className="card-container">
       </div>
     </>
  );
}

// export default App;
Players.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func
};

export default Players;
