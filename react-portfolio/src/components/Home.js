import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Experience from './about/Experience'
import About from './about/About'
import Projects from './Projects'
import Tutorials from './Tutorials'
import ECMAscript  from './tutorials/ECMAscript/ECMAscript'
import PostgreSQL from './tutorials/PostgreSQL/PostgreSQL'
import ReactTutorial from './tutorials/ReactTutorial/ReactTutorial'
import MongoDB from './tutorials/MongoDB/MongoDB'
import Train from './projects/Train'
import Giphy from './projects/Giphy/Giphy'
import MySQL from './projects/MySQL'
import Mongo from './projects/Mongo/Mongo'
import NYTsearch from './projects/NYTsearch/NYTsearchApp'

class Home extends Component {
	render() {
		return (
			<div id="home-div">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1>Full-stack Web Developer</h1>
						<p>Based out of Austin, TX. </p>
					</div>
					<div id='jumbotron-footer'>
						<ul>	
							<li><Link to="/info/experience"><button id="jumbo-btn">My information</button></Link></li>
							<li><Link to="/info/about"><button id="jumbo-btn">About me</button></Link></li>
							<li><Link to='/projects'><button id="jumbo-btn">Completed Projects</button></Link></li>
							{/*<li><Link to='/tutorials'><button id="jumbo-btn">Tutorials</button></Link></li>*/}
						</ul>
					</div>
				</div>
				<div className="component-holder">
					<Route path="/info/experience" component={Experience}/>
					<Route path="/info/about" component={About}/>
					<Route path="/projects" component={Projects}/>
					<Route path="/tutorials" component={Tutorials}/>
					<Route path="/ecmascript" component={ECMAscript}/>
					<Route path="/postgresql" component={PostgreSQL}/>
					<Route path="/react" component={ReactTutorial}/>
					<Route path="/mongodb" component={MongoDB}/>
					<Route path="/giphy" component={Giphy} />
					<Route path="/train" component={Train} />
					<Route path="/mysql" component={MySQL} />
					<Route path="/mongo" component={Mongo} />
					<Route path="/nytsearch" component={NYTsearch} />
				</div>
			</div>
		)
	}
}

export default Home