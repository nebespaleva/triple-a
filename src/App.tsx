import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Tags from './Pages/Tags';
import AboutMe from './Pages/AboutMe';
import './index.css'


function App() {

	const homeLink = '/';
	const tagsLink = '/search_by_tag';
	const aboutMeLink = '/about_me';

	return (
		<Router>
			<Switch>
				<Route path={homeLink} exact>
					<Home active={homeLink}/>
				</Route>
				<Route path={tagsLink}>
					<Tags active='/search_by_tag'/>
				</Route>
				<Route path={aboutMeLink}>
					<AboutMe active={aboutMeLink}/>
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
