This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


I could have a {Main} component with the header and footer; inside the Main component, I could put route paths as such:

<Route component={Main}>
  <Route path='/' component={Home} />
  <Route path='/completed' component={Projects}
  <Route path='/current' component={CurrentProject}
</Route>

could throw in - path="app" - into Main Route...giving all child routes an /app/ prefix
|
<Route component={Main} path="app">
---------------------------------------

Index Rotue - 

<Route component={Main} path="app">
  <IndexRoute component={Home} />
  <Route path="/completed" component={Projects} />
  <Route path="/completed/:name" component={ProjectDetail} />
  <Route path="/current" component={CurrentProjects} />
</Route>

must import the component from react-router:
  import {Router, Route, IndexRoute} from 'react-router'

In the ./public/index.html add: <base href="/" />

React component remains loaded even though the path specifies that it shouldn't be there

My Routes:

    <Router>
        <Route component={Main}>
           <Route exact path='/' component={Home} /> 
           <Route path='/about' component={About} />
           <Route path='/info' component={Info} />
           <Route path='/projects' component={Projects} />
           <Route path='/projects/giphy' component={Giphy} />
           <Route path='/projects/train' component={Train} />
        </Route>
    </Router>

Main component render() method:

    return (
        <div id="main-div">
            <nav className="navbar navbar-light">
                <ul>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/projects">Completed Projects</a></li>
                  <li>In Progress</li>
                </ul>
            </nav>
            <div id="main-content-div">
                <Route path="/" component={Home} />
                <Route path="/projects" component={Projects} />
            </div>
            <div className="footer">
                <ul>
                  <li><a href="https://www.linkedin.com/in/daniel-ertel-moore-79ab2294/" alt=""><img src="../../logos/linkedin.png" alt=""/></a></li>
                  <li><a href="..." alt=""><img src="../../logos/githubwrong.png" alt=""/></a></li>
                </ul>
                <p>....@gmail.com</p>
            </div>
         </div>
      )