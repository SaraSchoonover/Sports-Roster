import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../PlayerForm';
// import PropTypes from 'prop-types';
// import PlayerForm from '../PlayerForm';

function AddPlayer({ setPlayers }) {
  return (
    <div>
    <PlayerForm
      formTitle="Add Player"
      setPlayers={setPlayers}
      />
      </div>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired
};

export default AddPlayer;
