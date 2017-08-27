import React, {Component} from 'react'

class About extends Component {
	render() {
		return (
			<div className="container" id="about-div">
				<h1>About me:</h1>
				<div className="container about-me">
					<div id="img-div">
						<img src="../../../me.jpg" alt=""/>
					</div>
					<div id="hobbies">
						<div className="hobby" id="exercise">
							<img src="../../../dumbbell.png" alt=""/>
							<h4>exercise</h4>
							<p>Exercise is a key component of stress relief for me. I enjoy lifting weights and participating in mixed martial arts classes.</p>
						</div>
						<div className="hobby" id="csgo">
							<img src="../../../csgo.png" alt="" />
							<h4>Video Games</h4>
							<p>Counter-Strike: Global Offensive is my favorite competition to watch, and Overwatch is my favorite game to play. I've always needed a competitive outlet,
							and these two games provide that outlet for me.</p>
						</div>
						<div className="hobby" id="programming">
							<img src="../../../programming.png" alt="" />
							<h4>programming</h4>
							<p>I write code because I like building things, and unlike metal/woodworking, there's no cost for the raw materials! I'm currently putting all of my effort into 
							full-stack web development, but in the future I'd love to learn Python and other languages to expand upon what I can build.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About