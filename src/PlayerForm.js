import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addPlayer } from './helpers/data/playerData';

const PlayerForm = ({ formTitle, setPlayers }) => {
  const [player, setPlayer] = useState({
    name: '',
    position: '',
    imageUrl: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player).then((playerArray) => setPlayers(playerArray));
  };

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (
       <>
    <div className='player-form'>
    <form
      id='addPlayerForm'
      autoComplete='off'
      onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <label>Name: </label>
        <input
           name='name'
           type='text'
           placeholder='Name'
           value={player.name}
           onChange={handleInputChange}
        >
        </input>
        <label>Position: </label>
        <input
           name='position'
           type='text'
          placeholder='Position'
           value={player.position}
           onChange={handleInputChange}
        >
        </input>
        <label>Player Image: </label>
        <input
           name='image'
           type='url'
           placeholder='Player Image'
           value={player.imageUrl}
           onChange={handleInputChange}
        ></input>
        <button type='submit'>Submit</button>
    </form>
    </div>
       </>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func
};

export default PlayerForm;
