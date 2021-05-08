import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSinglePlayer } from '../helpers/data/playerData';

export default function SinglePlayer() {
  const [player, setPlayer, imageUrl] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSinglePlayer(firebaseKey)
      .then(setPlayer);
  }, []);

  return (
    <div>
      <h1>Single Player</h1>
      <h2>{player.name}</h2>
      <h2>{player.position}</h2>
      <img style={{ width: '18rem' }} src={imageUrl} className="photo" alt="Card image cap" />
    </div>
  );
}
