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
						<div id="exercise">
							<img src="../../../dumbbell.png" alt=""/>
							<h4>exercise</h4>
							<p>Exercise is a key component of stress relief for me. I enjoy lifting weights and participating in mixed martial arts classes.</p>
						</div>
						<div id="overwatch">
							<img src="../../../overwatch.png" alt="" />
							<h4>overwatch</h4>
							<p>Competing in something is another key component of stress relief, and at the moment, Overwatch is my go-to game. 
							I'm a flex player, but my favorite hero is Genji. It's a wonderful game with many aspects to it, so I expect I'll be playing it for a long time to come.</p>
						</div>
						<div id="csgo">
							<img src="../../../csgo.png" alt="" />
							<h4>cs:go</h4>
							<p>Counter-Strike: Global Offensive is my favorite sport to watch. It is a highly-strategic first person shooter gaining popularity, and I enjoy watching it in the 
							same way people enjoy watching football or basketball.</p>
						</div>
						<div id="programming">
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