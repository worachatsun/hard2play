import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing';
import Twister from '../pages/Twister';

const RouterCompoment: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path='/twister'>
          <Twister />
        </Route>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterCompoment;
