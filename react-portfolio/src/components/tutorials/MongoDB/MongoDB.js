import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

import DataAggregation from './DataAggregation'
import FindOrQuery from './FindOrQuery'
import Indexes from './Indexes'
import InsertData from './InsertData'
import RemoveData from './RemoveData'
import UpdateData from './UpdateData'

class MongoDB extends Component {
	render() {
		return(
			<div className="container tutorial-main" id="mongodb-main">
				<div className="tutorial-links" id="mongodb-links">
					<Link to="/mongodb/data-aggregation"><p>Data Aggregation</p></Link>
					<Link to="/mongodb/find-or-query"><p>Find or Query</p></Link>
					<Link to="/mongodb/indexes"><p>Indexes</p></Link>
					<Link to="/mongodb/insert-data"><p>Insert Data</p></Link>
					<Link to="/mongodb/remove-data"><p>Remove Data</p></Link>
					<Link to="/mongodb/update-data"><p>Update Data</p></Link>
				</div>	
				<div className="tutorial-component" id="mongodb-component">
					<Route path="/mongodb/data-aggregation" component={DataAggregation}/>
					<Route path="/mongodb/find-or-query" component={FindOrQuery}/>
					<Route path="/mongodb/indexes" component={Indexes}/>
					<Route path="/mongodb/insert-data" component={InsertData}/>
					<Route path="/mongodb/remove-data" component={RemoveData}/>
					<Route path="/mongodb/update-data" component={UpdateData}/>
				</div>			
			</div>
		)
	}
}

export default MongoDB