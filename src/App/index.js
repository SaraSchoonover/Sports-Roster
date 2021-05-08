import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import firebaseConfig from '../helpers/apiKeys';
// import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import NavBar from './components/NavBar';
import { getPlayers } from '../helpers/data/playerData';

firebase.initializeApp(firebaseConfig);

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // do something
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        // do something else
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes
      user={user}
      players={players}
      setPlayers={setPlayers}
      />
   </>
  );
}

export default App;
