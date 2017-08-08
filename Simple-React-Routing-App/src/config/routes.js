import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Main from "../components/Main";
import Info from "../components/Info";
import Chat from "../components/Chat";

const Routes = () => (
<div>
  <Router>
    <Main>
      <Route exact path="/" component={Main}>
        <Switch>
          <Route path="/info" component={Info} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </Route>
   </Main>
 </Router>
</div>
)

export default Routes;
