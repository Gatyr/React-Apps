import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Info extends Component {
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
					<p>Simply put, I have a strong command of the English language and conveying ideas. I studied philosophy because I hoped to matriculate into 
					law school, so I find it easy to have a strict semantic understanding of ideas or arguments presented to me. Luckily (for the people around me), being pedantic
					or uneccessarily verbose is frowned upon in undergraduate philosophy. Thus, I learned how to convey complex ideas in ways that clearly communicate what I want, and in ways that are easy to understand. 
					</p>
					<p>In addition to communicating effectively, I've learned the value of being a part of a team. Over the course of the day, the people who shop at Costco make an absolute mess of the store. 
					Truly, you begin to think that adults are no better than toddlers. The distance walked just returning stray shopping carts to the patio easily becomes several miles each day. Similarly, managers whose
					duties take them across the store end up walking ten to fifteen miles a day. There's simply too much work to be done for it to be done inefficiently, so we work in team to ensure 
					everything gets done through an efficient separation of labor. A team of managers will work with each other before the store opens to make sure each department is adequately staffed and looked after. 
					Each manager will work with their team of hourly employees to ensure the department is ready once the store opens.</p>
					<p>And, most importantly, each member of any team must reliably be able to work independently to move their team towards their goal. The warehouse is simply too large for people to constantly be working 
					in close proximity to one another.</p>
					<p>It's these things...my ability to communicate, work with a group of people as a team, and as a motivated and independent individual in the context of being a team meber, that I believe will 
					help me thrive while I learn what it means to be a full-stack web developer.</p>
					<p>Plus, people adore me. You'll find that out when you hire me, though.</p>
				</div>
			</div>
		)
	}
}

export default Info

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

	
