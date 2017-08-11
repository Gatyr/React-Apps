import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

import {Main} from '../components/Main'
import Search from '../components/Search'
import Saved from '../components/Saved'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Main>
            <Route exact path="/" component={Main}>
              <Route path='/saved' component={Saved}/>
              <Route path='/search' component={Search}/>
            </Route>
          </Main>
        </Router>
      </div>
    );
  }
}

export default App;
