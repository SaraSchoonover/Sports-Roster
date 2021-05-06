import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPlayer from '../views/AddPlayer';
// import PropTypes from 'prop-types';
import Home from '../views/Home';
import Players from '../views/Players';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
          path='/players'
          component={() => <Players />}
        />

        <Route
          path='/add-players/'
          component={() => <AddPlayer />}
        />
      </Switch>
    </div>
  );
}
