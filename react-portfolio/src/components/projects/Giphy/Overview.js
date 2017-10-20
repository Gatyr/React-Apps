import React, {Component} from 'react'

class Overview extends Component {
	render() {
		return (
			<div className="container" id="lsit">
				<div>
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li><img src="/logos/HTML5.png" alt=""/></li>
							<li><img src="/logos/CSS.png" alt=""/></li>
							<li><img src="/logos/javascript.png" alt=""/></li>
							<li><img src="/logos/jquery.gif" alt=""/></li>
							<li><img src="/logos/bootstrap.png" alt=""/></li>
							<li><img src="/logos/giphy.gif" alt=""/></li>
						</ul>
					</div>				
					<div className="col-md-6" id="project-picture">
						<div className="video-player">
							<iframe title="Giphy" src="https://player.vimeo.com/video/233887822" width="640" height="290" frameBorder="0"  allowFullScreen></iframe> 
						</div>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What's going on behind the scenes</h4>
						<ul>
							<li>First I created an array of subjects for the user to choose from, and used jQuery to render a series of buttons
							to click on. Each button was given an ID-attribute that corresponds with what will be passed to the Giphy API call</li>
							<li>Then I created a way for the user to submit a subject which, upon submission, would render a new button that could be 
							clicked in order to display results for the new subject</li>
							<li>Finally, the AJAX call to the Giphy API...</li>
							<li>I set a jQuery method so that anytime a button is clicked, the results div would be emptied and an AJAX call would be made</li>
							<li>Once the call was made, I looped through every result and used jQuery to assign various data-attributes for DOM manipulation in the future</li>
							<li>Finally, I added a function so that whenever an image is clicked on, whether it was moving or still, the image would switch to the 
							opposite state</li>
						</ul>
					</div>
				</div>
			</div>
		)	
	}
}

export default Overview