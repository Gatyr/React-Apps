let bigObject = {
	giphy: {
		overview: {
			name: "Giphy",
			techs: ["HTML5.png", "CSS.png", "javascript.png", "jquery.gif", "bootstrap.png", "giphy.gif"],
			video: "https://player.vimeo.com/video/233887822",
			text: {
				1: "This was my first app that I used an API for. It was a good way to jump off the deepend because the Giphy API returns a bunch of information in the results object",
				2: "Most everything was pretty straightforward, with the exception of getting a still image to turn into the moving version. That proved to be a problem in both the jQuery and React.js version",
				3: "For jQuery, the solution was to create data-??? attributes and use jQuery functions to find those data attributes and manipulate the DOM with them",
				4: "In React, instead of manipulating the DOM, I utilized the component lifecycle and set methods for each image component, rather than manipulating each image itself."
			}
		},
		code: {
			1: {
				text: [
					"This function will be used anytime the page loads or a new button is added",
					"We start by emptying the buttons div and then iterating through the array containing all the subjects for searches",
					"In each iteration, we set a variable equal to a jQuery element, and set another variable to an API-call-friendly version (by replacing whitespace with a '+' for the url) of what is displayed on the button",
					"The id attribute is then set, along with the text to display on the button",
					"And finally, the button is appended to the buttons div"],
				img: "code1.png"
			},
			2: {
				text: [
					"This is the addButton jQuery method",
					"Whenever the addButton button is clicked, the text from the form is taken and added to the buttonArray",
					"With a new buttonArray to create buttons from, the displayButtons function is called and all buttons, including the new one, are rendered"
					],
				img: "code2.png"
			},
			3: {
				text: [
					"When a subject button is pressed, the results container is emptied and the URL for the ajax call are set",
					"When the ajax call is made, the results are taken and iterated over 25 times",
					"For each iteration, a jQuery element is set to a variable, along with the rating, gif URL, and still image URL",
					"Several attributes are set so that the image can have a source, a state attribute for whether or not the picture is moving, and the URL for both the still and moving URL",
					"This was done so that during the transition to moving or still, an API call wouldn't be made, just a little bit of DOM manipulation",
					"A class is added so that jQuery methods can be called on that class",
					"And finally, the results container is appended with the rating and image via jQuery methods"
					],
				img: "code3.png"
			},
			4: {
				text: [
					"Finally, we set the script for what happens when we want to change the gif from still to moving (or moving to still)",
					"When a gif is clicked, the data-state attribute is found and set to a variable",
					"If it is still, then the source attribute is set to what is stored in the data-moving attribute, and the data-state attribute is changed to moving",
					"If it is moving, the opposite occurs",
					"After all is said and done, when the document is loaded, the displayButtons and displayGifs functions are called and the app is running"
				],
				img: "code4.png"
			}
		}		
	},
	train: {
		overview: {
			name: "Train Scheduler",
			techs: ["HTML5.png", "CSS.png", "javascript.png", "jquery.gif", "bootstrap.png", "firebase.png"],
			video: "https://player.vimeo.com/video/233887906",
			text: {
				1: "This was originally my first app that utilized a database. In addition to all of the DOM manipulation I learned previously, I worked in a way to make user input permanent.",
				2: "Unfortunately, working with Firebase was presented to me poorly, or I didn't understand enough about databases to begin with, or some unforseen reason, working with Firebase left a bad tast in my mouth.",
				3: "Thus, this is now mostly an app that demonstrates jQuery and how to utilize it for creating tables in HTML.", 
				4: "Behind the scenes, though, this app was the first time I used an object constructor, so that's exciting."
			}
		},
		code: {
			1: {
				text: [
					"The app starts with the config object (which has been redacted) passed as a parameter to the firebase method and a var called 'database' set to the firebase.database() method for the sake of simplicity",
					"The train object constructor takes three parameters and assigns six values to the relevant keys"
				],
				img: "code1.png"
			},
			2: {
				text: [
					"The minutesAway function used in the constructor first takes the first arrival time for the train and converts it to something the moment.js library can use",
					"The difference between now and the first arrival time is calculated using the moment.js diff method",
					"timeRemainder takes the difference between now and the first arrival (which is always 3:30 AM, as specified in the constructor) and finds the time left over since the most recent time the frequency interval was completed",
					"And finally, the time until the train arrives next finds the difference between the frequency interval and how much time has passed since the frequency interval last passed"
					],
				img: "code2.png"
			},
			3: {
				text: [
					"Here a bunch of trains are made using the constructor, and then set in the database",
					],
				img: "code3.png"
			},
			4: {
				text: [
				"The database is accessed and a jQuery element is created for the table header",
				"Each index in the train array is iterated over, creating an additional jQuery element for each row with the relevant train info",
				"The database is accessed again for userAddedTrains, and again iterated over for each train, doing the same thing as the original trains"
				],
				img: "code4.png"
			},
			5: {
				text: [
				"When the submit button is pressed, the name, destination, and frequency are used to create a new train with the train constructor, which is then added to the trainList array",
				"The addInfo() function is called, appending the information to the train table",
				"And finally the new train is pushed to the database"
				],
				img: "code5.png"
			}
		}
	},
	mysql: {
		overview: {
			name: "MySQL Storefront",
			techs: ["javascript.png", "nodejs.png", "MySQL.png"],
			video: "https://player.vimeo.com/video/234932040",
			text: {
				1: "There's no front-end portion of this app because I like to crawl before I walk, and implementing a front end would have impeded the learning process by adding in more points in which the app could malfunction.",
				2: "Originally I wanted to create something with just one table, but I realized how easily I could do more with additional tables, including adding different users, different product tables, etc.",
				3: "The project uses the Inquirer Node module, which was the first time I used anything made accessible by Node. It was nice learning just how much has been made available through just typing 'npm install ----'",
				4: "This app was made before I actually understood promises in javascript, and it's become glaringly obvious that this app would benefit from using promises rather than calling a function at the end of another function."
			}
		},
		code: {
			1: {
				text: [
					"Here we create a table called CSGO (for the game Counter-Strike: Global Offensive) with an id that auto increments, name, price, rarity, and quantity",
					"The primary key is set for the id, since that will start at 1 and increment automatically, making it a convenient thing to call upon",
					"There is also an example of what is inserted into the table"
					],
				img: "code1.png"
			},
			2: {
				text: [
					"Using the mysql module, the connection is set and the connect method called"
					],
				img: "code2.png"
			},
			3: {
				text: [
					"Here the Inquirer module is used to determine which user is signing in",
					"The answer is received in the callback and, if the person signs in as someone on the list, their user data is accessed via the accessUserData function"
					],
				img: "code3.png"
			},
			4: {
				text: [
					"The accessUserData function, which takes a user as a parameter",
					"The DB is queried via some SQL syntax, and the users data is accessed and displayed in the console",
					"The determineTable function is called to figure out what the user wants to buy",
					"The determineTable function is more or less just an Inquirer prompt, with nothing special about it, so we'll jump to..."
					],
				img: "code4.png"
			},
			5: {
				text: [
					"...the SQL function that takes the users answers from the determineTable function as parameters, and starts with an SQL query to the DB",
					"I chose to set a few variables based on what was found for the query, just to make life easier in the rest of the function",
					"Based on what was returned, the table is updated and, depending on which table the items were bought from, the appropriate message is displayed",
					"Then two relatively self-explanatory functions are called"
					],
				img: "code5.png"
			}
		}
	},
	mongo: {
		overview: {
			name: "Mongo Web Scraper",
			techs: ["HTML5.png", "CSS.png", "javascript.png", "jquery.gif", "mongoose.png", "expressjs.png", "mongodb.png", "bootstrap.png"],
			video: "https://player.vimeo.com/video/233887906",
			text: {
				1: "Learning to use a web scraper was a good experience. It's something that seems like it could have limited use, but for lots of different applications if an API isn't available.",
				2: "I chose to make an app with MongDB because at the time, I read something that really hyped the Mongo Express React Node stack, and figured I would make the effort to learn Mongo and React",
				3: "For such a limited app, I think the use of a schema like mongoose requires is a little excessive, but it's easy to see how useful that would be for larger-scale apps. The utility provided by the Mongoose schema object seems like it would be useful for someone with a grand idea in mind.",
				4: "I had trouble integrating a front end to the server I set up, so my decision to make just a back end for my MySQL Storefront app turned out to be well made. Conceptually, nothing was difficult to understand, but I made some silly mistakes that were easy to overlook, so managing the DOM and server calls at the same time was tricky.", 
				5: "This was all done in a local environment, so the next challenge I set was to get something working on the actual internet."
			}
		},
		code: {
			1: {
				text: [
					"The scrape function for my web scraper",
					"The request method provided by NPM makes the HTTP request, and the callback function executes the necessary steps to perform the webscraping",
					"A result array is created and the cheerio load method is assigned to a character (for the sake of syntactic simplicity) and given the HTML response as a parameter",
					"Then, for each article-box div on the page, a function is performed",
					"The title, summary, link, and image associated with each article are assigned to a variable. If all four are found...",
					"...a series of regular expressions are used to replace any line separators, line feed characters, carriage returns, tabs, and two or more whitespace characters (respectively) with just one whitespace character",
					"A new object is created, passed to the result array, and returned with the cb() method"				
					],
				img: "code1.png"
			},
			2: {
				text: [
					"The schema for our articles",
					"The schema object takes a series of objects and specifies a few things with key/value pairs",
					"The type is specified, indicating whether a string, boolean, number, date, etc. is expceted",
					"Along with that, whether or not an object is required, if it needs to be unique, or what the default should be are all specified appropriately",
					"On the overview for this app, I mentioned that the schema Mongoose uses wasn't particularly valueable for my purposes, but I could tell how a larger-scale product would benefit from it",
					"For example, if pbnation.com had a date format that I found unsatisfactory, I could create a method inside of the schema to rectify that",
					"An alias can be set, non-persistant data can be formed and called, and there are around twenty different options to utilize",
					"Suffice to say that I haven't yet used Mongoose to its full potential"
					],
				img: "code2.png"
			},
			3: {
				text: [
					"The API routes for the server. This should be pretty self-explanatory as nothing here is too ambitious",
					"At the '/' route, the index page is rendered, and the saved page is rendered at the '/api/saved' route",
					"The '/api/fetch' route initiates a call to the headlinesController (referenced two images down) and the fetch method is performed, scraping new articles if there are any",
					"A get request for '/api/headlines' is set so that an empty object is creted and set to the req.query object parameter if it has been saved",
					"The headlinesController get method is called with that query as a parameter, and the response is converted to json",
					],
				img: "code3.png"
			},
			4: {
				text: [
					"Again, pretty simple stuff",
					"A route is set to update the headlines with the update method in headlinesController",
					"...and a route is specified for notes of a particular headline",
					"This was probably the most challenging part of the project, as setting the syntax correctly for both the server routes and the front end calls proved to be elusive. I ended up clarifying everything for myself by specifying 'headline_id' instead of '_id' because I kept jumbling the headline '_id' and the note '_id'. After that change was made, it became easier to maintain a more wholistic view of what was going on in the server",				
					],
				img: "code4.png"
			},
			5: {
				text: ["My headlinesController",],
				img: "code5.png"
			}
		}
	},
	nytsearch: {
		overview: {
			name: "React NYT Search",
			techs: ["HTML5.png", "CSS.png", "javascript.png", "jquery.gif", "mongoose.png", "expressjs.png", "mongodb.png", "bootstrap.png", "react.png", "nytapi.png"],
			video: "https://player.vimeo.com/video/233887843",
			text: {
				1: "This app was the result of several smaller React apps that I've chosen not to put up just because they are so limited in scope. Still, suffice to say that React is a completely different experience compared to what I've done before.",
				2: "I've come to love it, though, so I'm happy I struggled through this app. There's a lot going on behind the scenes, so be sure to check out the code description.",
				3: "The biggest challenge I've had with this app is getting the delete requests to work on the server the backend is hosted on. Everything works except the delete request with axios, no matter what I do with my middleware.",
				4: "Additionally, the alternatives for making HTTP requests cause the app to fail the build process for Heroku, so I'm stuck with the mostly-ok axios", 
				5: "I can't stress how interesting React made making this app. It was definitely frustrating at times, but I'm happy I dove in. "
			}
		},
		code: {
			1: {
				text: ["Fancy new (to me) ES6 syntax, along with the ReactDOM.render method that brings everything to life"],
				img: "code1.png"
			},
			2: {
				text: ["React routes"],
				img: "code2.png"
			},
			3: {
				text: [
					"The runQuery method for the helpers object, taking the three user inputs as parameters",
					"The parameters are modified slightly for the API call, and axios provides the HTTP request for the API",
					"Once the API call is returned, the results are logged and returned"
					],
				img: "code3.png"
			},
			4: {
				text: [
					"The getSaved method for returning all of the saved articles",
					"The reason I have to different HTTP requests here is a long story, but the simplest part of that story is I felt it would be good practice to achieve one thing with two different tools",
					"Both the axios and fetch worked in the local development server, but each had its drawbacks when I tried to push a deployable version",
					],
				img: "code4.png"
			},
			5: {
				text: [
					"This is where I have encountered the most trouble with the app. The method simply calls for an article to be deleted and for the results to be returned",
					"In the local development server, everything works as expected. However, when I try to deploy with the fetch request enabled, the Heroku build process fails",
					"When I deploy with the axios method, the build succeeds, and everything except the deleteSaved method works in deployment. When a user attempts to delete an article, an error is logged: 'Method DELETE is not allowed by Access-Control-Allow-Methods error with “GET, PUT, POST, DELETE”'"
					],
				img: "code5.png"
			}, 
			6: {
				text: [
					"So I went over to stackoverflow and did a little research. Apparently other users were having the same problem, and fixed it with the appropriate use of middleware functions",
					"Specifying which Access-Control-Allow-Methods to allow fixed their problems, so I included this bit of code in my server file",
					"Unfortunately, the same error persisted. I'm still currently attempting a fix",
					],
				img: "code91.png"
			},
			7: {
				text: [
					"The wonderful world of JSX",
					"The important thing to note here is the use of <Link to=''> and <Route path=''> elements",
					"When the DOM is rendered, the 'Link' elements are rendered as <a> elements with an href attribute equal to the root path plus what is specified in the quotation marks",
					"When those links are clicked, the browser navigates to the path, causing the respective component to be rendered"
					],
				img: "code6.png"
			},
			8: {
				text: [
					"The Search component",
					"A constructor method is created, and this.state is set with results set to an empty object",
					"A setQuery method is defined, taking user inputs as parameters, and running a promise that starts with the helpers runQuery method",
					"When the query is run and data returned, the setState method is invoked and this.state.results is set to the data.docs object",
					"Inside the render method, the Query and Results components are rendered"
					],
				img: "code7.png"
			},
			9: {
				text: [
					"Inside the Saved component, once the component is mounted, there is a promise that starts with the getSaved helpers method and then uses that data to set the state for the component",
					"A handleClick method is created for the delete button that starts simply by logging to the console that the button was clicked. This was done to ensure I was at least getting enough right to know that the click event was happening and doing something",
					"Similarly, the item being clicked was logged to ensure the click event was targeted to a specific button, and not just any button in general",
					"A promise is utilized to first delete an article and then, using the remaining data, set the state of the component"
					],
				img: "code8.png"
			},
			10: {
				text: [
					"Some more, fancier ES6 syntax in the JSX",
					"The map method is called to iterate over the savedArticles object and create a div for each article",
					],
				img: "code9.png"
			}
		}
	}

}

export default bigObject