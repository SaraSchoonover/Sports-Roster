import React from 'react';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../../helpers/data/playerData';

const PlayerCard = ({
  firebaseKey,
  name,
  position,
  imageUrl,
  setPlayers
}) => {
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then((playerArray) => setPlayers(playerArray));
        break;
      default:
        console.warn('nope');
    }
  };
  return (
        <Card body>
         <CardTitle tag="h5">Player Name: {name}</CardTitle>
         <CardText>Position: {position}</CardText>
         <CardText>Image: {imageUrl}</CardText>
         <Button color ="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
         </Card>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string,
  firebaseKey: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  setPlayers: PropTypes.func
};
export default PlayerCard;
