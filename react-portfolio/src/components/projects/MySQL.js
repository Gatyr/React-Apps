import React, {Component} from 'react'

class MySQL extends Component {
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
				<a href="https://github.com/Gatyr/MySQL-Storefront"><h1>MySQL Storefront</h1></a>
				<div className="container" id="lsit">
					<div className="col-md-3" id="tech-used">
						<h4>What I used:</h4>
						<ul>
							<li><img src="/logos/javascript.png" alt="" /></li>
							<li><img src="/logos/nodejs.png" alt="" /></li>
							<li><img src="/logos/MySQL.png" alt="" /></li>
						</ul>
					</div>
					<div className="col-md-6" id="project-picture">
						{/*<div className="img-link-btns">
							<button className="btn btn-link" onClick={this.handleClick} value="1">1</button>
							<button className="btn btn-link" onClick={this.handleClick} value="2">2</button>
						</div>
						<img id="myImg" src={"/project-images/MySQLstore/mysql"+ this.state.src + ".png"} alt="" width="500" height="266"/>
						<p>{picDesc.mysql[this.state.src - 1]}</p> */}
						<iframe title="MySQL-app" src="https://player.vimeo.com/video/234932040" width="640" height="393" frameBorder="0" allowFullScreen></iframe>
					</div>
					<div className="col-md-3" id="what-I-learned">
						<h4>What's going on behind the scenes:</h4>
						<ul>
							<li>One database with a table for Overwatch products, one for CS:GO products, one for all users and their budget,
							and one for each user and their respective inventory</li>
							<li>The app starts with an Inquirer prompt asking who you are signing in as</li>
							<li>Upon signing in, you are asked which game you are buying for, which item, and what quantity</li>
							<li>The database is updated accordingly, deducting the cost from your budget and moving that money to the store budget, and finally
							 moving the items from the store table to the user inventory table.</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default MySQL