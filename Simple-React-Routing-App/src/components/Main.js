import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Info from './Info'
import Chat from './Chat'

const Main = () => (
  <div className="container">
    <div className="row">
      <div className="jumbotron">
        <h1>React Router</h1>
        <p><em>Because we're sick of people being so toxic!</em></p>
        <Link to="/info"><button className="btn btn-default">Info</button></Link>
        <Link to="/chat"><button className="btn btn-default">Comments</button></Link>
      </div>
      <div className="row">
        <div className="text-center">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/YcINJAaRYqQ"
          >
          </iframe>
        </div>
      </div>
      <div className="container">
        {/* Added this.props.children to dump all of the child components into place */}
        <Route path="/info" component={Info}/>
        <Route path="/chat" component={Chat}/>
      </div>
    </div>
  </div>
)

export default Main