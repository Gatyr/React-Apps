import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './config/Routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

/*


index page (main)
	component for intro
	component for info
	(just do one component [as a subcomponent for main component] and include both things?)

project page (main)
	header with links to prjects/directories (part of project component)
	(sub)component for rendering individual projects, (sub)component for directory listing for react apps
		(sub-sub)component for apps inside of each directory

in-process project page (main)
	subcomponent for directory of updates and general explanation of what I'm doing
	subcomponent for displaying a particular entry 
		also display generic component for comment section from OAUTH 

(once complete) Workout/comp analysis tracker app
	embed for youtube vid
	list of exercises/sets/reps
	how I felt about things
	comments
	
	or

	gif (or set of them)
	what I did well
	what I did poorly
	what to work on
	comments

main
	header for links to other parts of the site
	body for placing other components
	footer with contact info

*/