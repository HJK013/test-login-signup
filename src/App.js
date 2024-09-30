import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './page/Login';
import Signup from './page/Signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
