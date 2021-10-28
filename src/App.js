import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
