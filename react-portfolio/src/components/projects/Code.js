import React, {Component} from 'react'
import bigObject from './projectsInfo'

class Code extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectName: this.props.projectName,
			info: bigObject[this.props.projectName]
		}
		this.renderInfo = this.renderInfo.bind(this);
		this.renderText = this.renderText.bind(this);
	}
	renderText(key) {
		
		let placeholder = this.state.info.code;
		return placeholder[key].text.map((keyValue, index) => {
			return (
				<li key={index}>{placeholder[key].text[index]}</li>
			)
		})
	}
	renderInfo() {
		let placeholder = this.state.info.code;
		let name = this.state.projectName;
		
		return Object.keys(this.state.info.code).map((key, index) => {
			return (
				<div className="code-snippet" id={name + key} key={key}>
					<div className="code-description">
						<ul>
							{this.renderText(key)}
						</ul>
					</div>
					<div className="code-img">
						<img src={"/project-images/" + this.state.projectName + "/" + placeholder[key].img} alt=""/>
					</div>
				</div>
			)
		});
	}
	render() {
		return (
			<div className="code-descriptor-div">
				{this.renderInfo()}
			</div>
		)
	}
}

export default Code