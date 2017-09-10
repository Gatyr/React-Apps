import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import Arrays from "./Arrays"
import Class from "./Class"
import Destructuring from "./Destructuring"
import Generator from "./Generator"
import Iterator from "./Iterator"
import Mapping from "./Mapping"
import ObjectLiteral from "./ObjectLiteral"
import Promises from "./Promises"
import Reflecting from "./Reflecting"
import Setting from "./Setting"
import Strings from "./Strings"
import Symbols from "./Symbols"
import TemplateStrings from "./TemplateStrings"
import Others from "./Others"

class ECMAscript extends Component {
	render() {
		return(
			<div className="container tutorial-main" id="ecma-script-main">
				<div className="tutorial-links" id="ecma-links">
					<Link to="/ecmascript/array"><p>Array</p></Link> 
					<Link to="/ecmascript/class"><p>Class</p></Link> 
					<Link to="/ecmascript/destructuring"><p>Destructuring</p></Link> 
					<Link to="/ecmascript/generator"><p>Generator</p></Link> 
					<Link to="/ecmascript/iterator"><p>Iterator</p></Link> 
					<Link to="/ecmascript/map"><p>Map</p></Link> 
					<Link to="/ecmascript/object-literal"><p>Object Literal</p></Link> 
					<Link to="/ecmascript/promise"><p>Promise</p></Link> 
					<Link to="/ecmascript/reflect"><p>Reflect</p></Link> 
					<Link to="/ecmascript/set"><p>Set</p></Link> 
					<Link to="/ecmascript/string"><p>String</p></Link> 
					<Link to="/ecmascript/symbol"><p>Symbol</p></Link> 
					<Link to="/ecmascript/template-strings"><p>Template Strings</p></Link> 
					<Link to="/ecmascript/others"><p>Everything Else</p></Link> 
				</div>
				<div className="tutorial-component" id="ecma-component">
					<Route path="/ecmascript/array" component={Arrays} />
					<Route path="/ecmascript/class" component={Class} />
					<Route path="/ecmascript/destructuring" component={Destructuring} />
					<Route path="/ecmascript/generator" component={Generator} />
					<Route path="/ecmascript/iterator" component={Iterator} />
					<Route path="/ecmascript/map" component={Mapping} />
					<Route path="/ecmascript/object-literal" component={ObjectLiteral} />
					<Route path="/ecmascript/promise" component={Promises} />
					<Route path="/ecmascript/reflecting" component={Reflecting} />
					<Route path="/ecmascript/set" component={Setting} />
					<Route path="/ecmascript/string" component={Strings} />
					<Route path="/ecmascript/symbol" component={Symbols} />
					<Route path="/ecmascript/template-strings" component={TemplateStrings} />
					<Route path="/ecmascript/others" component={Others} />				
				</div>
			</div>
		)
	}
}

export default ECMAscript