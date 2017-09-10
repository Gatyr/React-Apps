import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Tutorials extends Component {
	render() {
		return(
			<div id="tutorials-main">
				<div id="tutorials-upper">
					<h2>Explore my very own abreviated explanation of:</h2>
					<Link to="/ecmascript"><div className="tutorial-link" id="ECMAscript-link">
						<h4>ECMA Script</h4>
						<div className="link-description">
							<p>There is no shortage of material online with which one can learn JavaScript. To be sure, anyone coming to my page
							in order to learn it would be sorely disappointed by my lack of expertise and thoroughness.</p>
							<p>However, with all of the resources available, there have been updates to ECMA standards, and most resources from before
							2015 will not have been updated to reflect these revisions. This is my humble attempt to aggregate and contextualize the new utility
							provided by these updates</p>
						</div>
					</div></Link>
					<Link to="postgresql"><div className="tutorial-link" id="Postgres-link">
						<h4>PostgreSQL</h4>
						<div className="link-description">
							<p>To be brief, PostgreSQL is going to be my preferred database management system using Structured Query Language. I'm choosing it because, 
							in the absense of a meaningful reason to do otherwise, I prefer open-source technologies</p>
						</div>
					</div></Link>
					<Link to="react"><div className="tutorial-link" id="React-link">
						<h4>React</h4>
						<div className="link-description">
							<p>React.js is the framework I used to build this site, so I will be chronicling my endeavors to learn React here. If I'm being 
							honest, I can't really justify my decision to use React instead of Angular other than an eagerness to get started with something and
							an ignorance on what makes either framework more preferable than the other.</p> 
							<p>React won the coin-toss, so hopefully you'll enjoy my abreviated explanation of React</p>
						</div>
					</div></Link>
				</div>
				<div id="tutorials-sub">
					<Link to="mongodb"><div className="tutorial-link" id="MongoDB-link">
						<h4>MongoDB</h4>
						<p>I'm including MongoDB because of my experience with it already and because (at least in my limited experience) of its ease of use. I figure 
						why not demonstrate that I'm flexible in what I am able to use?</p>
					</div></Link>
				</div>
			</div>
		);
	}
}

export default Tutorials