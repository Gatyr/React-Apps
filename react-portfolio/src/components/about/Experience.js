import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Experience extends Component {
	render() {
		return (
			<div id="info-div">
				<div className="container" id="technologies">
					<h2>What I've worked with:</h2>
					<div className="img-div"><img src="../../../logos/HTML5.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/CSS.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/javascript.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/jquery.gif" alt=""/></div>
					<div className="img-div"><img src="../../../logos/nodejs.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/MySQL.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/sequelize.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/expressjs.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/mongodb.png" alt=""/></div>
					<div className="img-div"><img src="../../../logos/react.png" alt=""/></div>
				</div>
				<div className="container" id="professional-experience">
					<h2>Professional Experience:</h2>
					<p><Link to="/resume">View My Resume</Link></p>
					<p><a href="https://www.github.com/gatyr">View my Github</a></p>
				</div>
				<div className="container" id="intangibles">
					<h2>What my resume and Github repository won't tell you:</h2>
					<div className="experience">
						<h4>Communication</h4>
						<img src="../../../communicate.png" alt="" />
						<p>In both my workplace and my home, communication has always been integral to a functioning community. I live in a cooperative house with several other people, 
						so an ability to communicate with one another is necessary to establish boundaries, create friendships, and maintain the cooperative atmosphere. At Costco, the division of labor always involved
						working in teams to accomplish the given goals for our department. That was true for all departments, and one fundamental aspect of teamwork is an ability to effectively communicate with superiors and peers.</p>
					</div>
					<div className="experience">
						<h4>Teamwork</h4>
						<img src="../../../teamwork.png" alt="" />
						<p>I've been involved in teams for nearly all my life. From YMCA soccer to my job at Costco, teamwork has always been important to some aspect of my life. In order to be an effective team member, I've internalized the fact that I must be reliable, 
						good with conflict resolution, and communicating effectively while also willing to listen. </p>
					</div>
					<div className="experience">
						<h4>Reliably Independent</h4>
						<img src="../../../independent.png" alt="" />
						<p>Part of being an effective team member is being able to work independently in the context of that team. I pride myself in being able to work resolutely with no oversight, 
						as this enables my superiors to allocate their efforts elsewhere and dmeonstrates that I can be trusted.</p>
					</div>
					<div className="experience">
						<h4>Proactive</h4>
						<img src="../../../responsibility.png" alt="" />
						<p>Being reliable isn't the only way I like to help my bosses. In every position I've held, I have been able and willing to take on more responsibility and go above and beyond what is minimally required of me. 
						I've found that the most effective way to help my superiors is to learn to do parts of their job that the feel comfortable allowing me to take responsibility for. In my experience, if I can decrease their workload, 
						it benefits them and, usually, the people working underneath them.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience

//info

	//technologies I work with

	//professional experience
		//resume
			//pretty the shit up for the page
		//intangibles
			//highlight communication skills
			//highlight ability to work independently and as part of a team 
			//reliability 

	//aspirations with web development
		//career change and financial security
		//ideal aspirations:
			//work with friends in 501 c3 to improve visibility and connectivity
			//maybe automate the boring or easy stuff with js (or python, in the future) scripts
		//short term:
			//learn in a professional environment 

	
