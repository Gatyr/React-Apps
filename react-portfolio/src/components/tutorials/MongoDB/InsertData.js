import React, {Component} from 'react'

class InsertData extends Component {
	render() {
		return (
			<div id="insert-data">
				<h1>The TL;DR of Insert Data</h1>
				<h3>Overview</h3>
				<div className="tutorial-section-div">
					<p>You can use the insert() method to add documents to a collection.</p>
				</div>
				<h3>Insert a Document</h3>
				<div className="tutorial-section-div">
					<p>Insert a document into a collection with the method:</p>
					<div className="code"><p>db.collectionName.insert({"{}"})</p></div>
					<p>Note that the method takes an object as a parameter</p>
				</div>
				<h3>Passing an object to the insert() method</h3>
				<div className="tutorial-section-div">
					<p>Passing an object literal:</p>
					<img src="../../../project-images/mongodb-tutorial/PassingObjectLiteral.png" alt="" />
					<p>Passing a variable:</p>
					<img src="../../../project-images/mongodb-tutorial/PassingVariable.png" alt=""/>
				</div>
				<h3>But that's not all!</h3>
				<div className="tutorial-section-div">
					<p>You can specify to insert just one document with:</p>
					<div className="code"><p>db.collectionName.insertOne({"{Futurama}"})</p></div>
					<p>Alternatively, if you have many things to insert, you can use:</p>
					<div className="code"><p>db.collectionName.insertOne([Futurama, TheSimpsons, KingOfTheHill])</p></div>
					<p>Note that an array of objects is passed as the parameter</p>
				</div>
			</div>
		)
	}
}

export default InsertData