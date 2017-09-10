import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import CompInh from "./CompInh"
import ComProps from "./ComProps"
import CondRend from "./CondRend"
import Forms from "./Forms"
import Handling from "./Handling"
import JSX from "./JSX"
import LiftingState from "./LiftingState"
import ListsAndKeys from "./ListsAndKeys"
import Rendering from "./Rendering"
import StatLife from "./StatLife"
import Thinking from "./Thinking"

class ReactTutorial extends Component {
	render() {
		return(
			<div className="container tutorial-main" id="React-Tutorial-Main">
				
					<div className="tutorial-links" id="react-links">
						<Link to="/react/jsx"><p>Introducing JSX</p></Link>
						<Link to="/react/rendering"><p>Rendering Elements</p></Link>
						<Link to="/react/components-and-props"><p>Components and Props</p></Link>
						<Link to="/react/state-and-lifecycle"><p>State and Lifecycle</p></Link>
						<Link to="/react/handling-events"><p>Handling Events</p></Link>
						<Link to="/react/conditional-rendering"><p>Conditional Rendering</p></Link>
						<Link to="/react/lists-and-keys"><p>Lists and Keys</p></Link>
						<Link to="/react/forms"><p>Forms</p></Link>
						<Link to="/react/lifting-state-up"><p>Lifting State Up</p></Link>
						<Link to="/react/composition-vs-inheritance"><p>Composition vs Inheritance</p></Link>
						<Link to="/react/thinking-in-react"><p>Thinking In React</p></Link>
					</div>
					<div className="tutorial-component" id="react-component">
						<Route path="/react/jsx" component={JSX} />
						<Route path="/react/rendering" component={Rendering} />
						<Route path="/react/components-and-props" component={ComProps} />
						<Route path="/react/state-and-lifecycle" component={StatLife} />
						<Route path="/react/handling-events" component={Handling} />
						<Route path="/react/conditional-rendering" component={CondRend} />
						<Route path="/react/lists-and-keys" component={ListsAndKeys} />
						<Route path="/react/forms" component={Forms} />
						<Route path="/react/lifting-state-up" component={LiftingState} />
						<Route path="/react/composition-vs-inheritance" component={CompInh} />
						<Route path="/react/thinking-in-react" component={Thinking} />
							
					</div>
				
			</div>
		)
	}
}

export default ReactTutorial