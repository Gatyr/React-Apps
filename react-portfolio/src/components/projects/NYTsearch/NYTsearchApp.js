import React, {Component} from 'react'
//import picDesc from '../../../utils/projects'

import NYTmain from './NYTmain'

class NYTsearch extends Component {
	constructor(props) {
		super(props);
		this.state = {src: 1}

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({src: event.target.value})
	}
	render() {
		return (
			<div className="component-holder" id="project-summary">
				<a href="https://github.com/Gatyr/React-Apps/tree/master/react-nyt-search-app"><h1>NYT Search React App</h1></a>
				<a href="https://nyt-mern-app.herokuapp.com/"><h1>Visit the app page</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li><img src="/logos/HTML5.png" alt="" /></li>
							<li><img src="/logos/CSS.png" alt="" /></li>
							<li><img src="/logos/javascript.png" alt="" /></li>
							<li><img src="/logos/jquery.gif" alt="" /></li>
							<li><img src="/logos/mongoose.png" alt="" /></li>
							<li><img src="/logos/expressjs.png" alt="" /></li>
							<li><img src="/logos/mongodb.png" alt="" /></li>
							<li><img src="/logos/bootstrap.png" alt="" /></li>	
							<li><img src="/logos/react.png"  alt="" /></li>
							<li><img src="/logos/nytapi.png"  alt="" /></li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						<iframe title="NYTsearchApp" src="https://player.vimeo.com/video/233887843" width="640" height="359" frameBorder="0" allowFullScreen></iframe> <p><a href="https://vimeo.com/233887843">NYT-mern-app</a> from <a href="https://vimeo.com/user791506">Gatyr</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What's going on behind the scenes:</h4>
						<ul>
							<li>Separate the app into a front-end directory and a back-end directory</li>
							<li>Inside the front-end directory, we set our Routes so that React knows which component to render depending
							on location, as well as a utility .js file for get, post, and delete calls on our API</li>
							<li>I also have my components created here, with methods to set the state according to user input and render accordingly</li>
							<li>On the backend, I've got my Mongoose schema model created so each saved article has the same schema when submitted to the DB</li>
							<li>I also have my server setup file and my routes file so the server knows what to do with the information it is given</li>
						</ul>
					</div>
				</div>
				<br/>
				{/*<div className="container" id="preface">
					<h4>This is a limited demonstration of the app</h4>
					<p>I originally built the app in order to integrate a React app and a MongoDB backend, but I haven't built that functionality into this page because I haven't yet learned how to deploy a secure backend. 
					I invite you to checkout my Github repo if you would like more information on how I built a backend for the app to run locally.</p>
				</div>
				<br/>
				<div className="container demo" id="NYTsearch-demo">
					<NYTmain />
				</div>*/}
			</div>
		)
	}
}

export default NYTsearch