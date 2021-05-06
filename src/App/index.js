import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import firebaseConfig from '../helpers/apiKeys';
// import NavBar from './components/NavBar';
import PlayerForm from '../PlayerForm';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import { getPlayers } from '../helpers/data/playerData';
import PlayerCard from './components/PlayerCard';

firebase.initializeApp(firebaseConfig);

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Routes />
      <PlayerForm
      formTitle='Player Form Name'
      setPlayers={setPlayers}
      />
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
  );
}

export default App;
