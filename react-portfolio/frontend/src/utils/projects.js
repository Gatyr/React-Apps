var picDesc = {
	giphy: ["Here you see the page as is is initially loaded. Click on the Game of Thrones button and...",
		'...twenty-five unmoving gifs will load onto the page, with their respective rating',
		'Click on an image and it becomes animated.', 'To add a new button, enter the text into the form and hit the add button...',
		'...and a new button is rendered to the page.'],
	train: ['The page, as it is initially rendered.', 'Enter in the specs for a train you would like to add to the database, then hit submit...',
		'...and the information will be added to the database and rendered at th bottom of the list'],
	routing: ['Here a simple page is rendered as a React component.', 'When the info button is pressed, the route changes to /info and the info component is rendered to the page',
		'Click the comments button, and the info section is removed and the comments are displayed'],
	nytsearch: ["The page as it is initially rendered.", "Hit the search link, and the page renders the search component", "Enter in the search term, the earliest and latest years the user wants results from, and hit the submit button",
	"Once the user hits submit, the Results component is rendered with the corresponding results"],
	mysql: ["After running the script, you are prompted to tell the program that you are either a customer or a store manager.",
		"After running through the program, you can see that the database updates the quantity with the total items left after the user makes a purchase. Note the quantity on item 7 before and after the initial transaction"],
	mongo: ["When the page first loads, a generic jumbotron component is rendered and we are able to hit the 'scrape new articles' button", 
		"Upon doing so, the app scrapes the front page of PBNation.com for the articles on the front page, rendering the headline, a summary, and a save button",
		"Once we save a few articles, we navigate to our /saved page where we can either add notes to the article, or delete it from the database",
		"To save a comment, just add the text to the entry field and click save.", "Each comment for the article will show up and, if so desired, the comment can be deleted by hitting the red X",
		"Here we see that the first comment was successfully deleted from the database"],
	mern: ["A bare minimum app with a MERN stack. There are already a few entries from other users", "Here I add in my name and my post, and hit the small blue submit button",
		"We see that my post is added with a date, edit button, and delete button", "Showing the delete button funcitonality"]
}

export default picDesc;