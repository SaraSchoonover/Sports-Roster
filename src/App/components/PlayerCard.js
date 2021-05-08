import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardTitle,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../../helpers/data/playerData';
import PlayerForm from '../../PlayerForm';

const PlayerCard = ({
  firebaseKey,
  name,
  position,
  imageUrl,
  setPlayers
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then((playerArray) => setPlayers(playerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/students/${firebaseKey}`);
        break;
      default:
        console.warn('nope');
    }
  };
  return (

        <Card style={{
          width: '18rem',
          flex: 'initial',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }} body>
         <CardTitle tag="h5">Player Name: {name}</CardTitle>
         <CardText>Position: {position}</CardText>
         <img style={{ width: '16rem' }} src={imageUrl} className="photo" alt="Card image cap" />
         <Button style={{ backgroundColor: '#ffa64d' }} onClick={() => handleClick('delete')}>Delete Player</Button>
         <Button style={{ backgroundColor: '#004d1a' }} onClick={() => handleClick('edit')}>
           {editing ? 'Close Form' : 'Edit Player'}
           </Button>
         {
         editing && <PlayerForm
         formTitle='Edit Player'
         setPlayers={setPlayers}
         firebaseKey={firebaseKey}
         name={name}
         position={position}
         />
         }
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
