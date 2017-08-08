
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Main = () => (
  <Router>
    <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>React Router</h1>
            <p><em>Because we can't afford to miss a minute of this video! #flylikeaneagle</em></p>
            <a href="#/info"><button className="btn btn-default">Info</button></a>
            <a href="#/chat"><button className="btn btn-default">Comments</button></a>
          </div>
          <div className="row">
            <div className="text-center">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/K1lKk5IU4ZE?rel=0&amp;controls=0&amp;showinfo=0"
              >
              </iframe>
            </div>
          </div>
          <div className="container">
            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.children}
          </div>
        </div>
      </div>
  </Router>
)

const info = () => (
  <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Movie Info</h3>
              </div>
              <div className="panel-body">
                <p><strong>Title:</strong> Space Jam </p>
                <p><strong>Year:</strong> 1996</p>
                <p><strong>Director:</strong> Joe Pytka</p>
                <p><strong>Stars:</strong> Michael Jordan, Wayne Knight, Theresa Randle </p>
              </div>
            </div>

          </div>

        </div>
      </div>
)

const chat = () => (
  <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Movie Info</h3>
              </div>
              <div className="panel-body">
                <p><strong>mjlover:</strong> OMG I LOVE THIS PART!!! </p>
                <p><strong>bugsboy:</strong> Best movie of all time.</p>
                <p><strong>bigtroll:</strong> Porky needs to go on a diet.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
)

ReactDOM.render(Main, document.getElementById('app'));

export default Main