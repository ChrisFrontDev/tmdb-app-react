import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/search/:title">
      <Search />
    </Route>
  </Switch>
);

export default Routes;
