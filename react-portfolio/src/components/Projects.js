import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'

class Projects extends Component {
	render() {
		return (
			<div id="project-div">
				<div id="projects-links">
					<div className="projects-class-div" id="front-end-apps">
						<h1>Front-end Apps</h1>
						<Link to="/giphy">
							<div className="project-portal" id="giphy-portal">
								<div className="project-portal-description">
									<h1>Giphy</h1>
									<p>Just a simple, lightweight .gif finder using the Giphy API.</p>
									<p>Choose from an of predefined subjects and click the button to see a selection 
									of gif images from that topic, or add your own button and see what the Giphy 
									API returns for your inquiry.</p>
								</div>
							</div>
						</Link>
						<Link to="/train">
							<div className="project-portal" id="train-portal">
								<div className="project-portal-description">
									<h1>Train Scheduler</h1>
									<p>Another simple jQuery app that allows the user to track the progress of a few
									predefined trains and their schedule. Users may add their own train to the schedule and, 
									if the user has access to the Firebase database, come back later and see their persistant 
									addition to the schedule.</p>
								</div>
							</div>
						</Link>
						<a href="https://powerful-plateau-79157.herokuapp.com/">
							<div className="project-portal" id="whackamole-portal">
								<div className="project-portal-description">
									<h1>Pet-The-Puppy</h1>
									<p>A jQuery whackamole app that I've renamed because I don't like the imagery "Whack-the-Puppy"
									invokes. Simply press start and click on any puppy that sits up in order to have someone pet him.
									</p>
									<p>This was done as a freelance project for a friend, and is the first thing I've ever been paid to
									make.</p>
								</div>
							</div>
						</a>
					</div>
					<div className="page-break" id="projects-page-break"></div>
					<div className="projects-class-div" id="apps-with-a-server">
						<h1>Apps With a Server</h1>
						<Link to="/mysql">
							<div className="project-portal" id="mysql-portal">
								<div className="project-portal-description">
									<h1>MySQL Storefront</h1>
									<p>My first foray into working with databases, this app allows the user to choose between
									a simple login as either a customer or manager. A customer may choose from one of two databases
									to buy items from, and upon doing so, the database is updated to reflect the purchase</p>
								</div>
							</div>
						</Link>
						<Link to="/mongo">
							<div className="project-portal" id="mongo-portal">
								<div className="project-portal-description">
									<h1>Mongo Web Scraper</h1>
									<p>This app allows users to scrape from the frontpage of a website called PbNation, gathering
									the latest news in the world of paintball.</p>
									<p>After scraping, the user can comb through the results and save articles of interest. Navigating to the 
									"Saved Articles" page allows the user to view any articles that have been saved, comment on them, or remove 
									the article from the collection</p>
								</div>
							</div>
						</Link>
						<Link to="/nytsearch">
							<div className="project-portal" id="nyt-portal">
								<div className="project-portal-description">
									<h1>NYT Search  React App</h1>
									<p>Utilizing the New York Times API, this app gives the user access to any article written by The New
									York Times. The search is set by the subject given by the user, as well as a window of which years 
									user is interested in searching.</p>
									<p>After searching, the user can click the link to view the article, or choose to save the article to 
									a database for future viewing.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects
