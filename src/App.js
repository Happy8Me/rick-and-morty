import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import Home from './containers/home';
import Characters from './containers/characters';
import Episodes from './containers/episodes';
import Locations from './containers/locations';
import myWatchList from './containers/myWatchList';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
          <Route path="/my-watch-list" component={myWatchList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
