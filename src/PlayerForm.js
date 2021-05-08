import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from './helpers/data/playerData';

const PlayerForm = ({
  formTitle,
  setPlayers,
  name,
  position,
  imageUrl,
  firebaseKey
}) => {
  const [player, setPlayer] = useState({
    name: name || '',
    position: position || '',
    imageUrl: imageUrl || '',
    firebaseKey: firebaseKey || null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player).then((playerArray) => setPlayers(playerArray));
    } else {
      addPlayer(player).then((playerArray) => setPlayers(playerArray));
    }
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
           name='imageUrl'
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
  setPlayers: PropTypes.func,
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.url,
  firebaseKey: PropTypes.string
};

export default PlayerForm;
