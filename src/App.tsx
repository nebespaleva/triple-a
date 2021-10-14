import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Tags from './Pages/Tags/Tags';
import AboutMe from './Pages/AboutMe/AboutMe';
import './index.css'
import LoginPage from './Pages/Login/LoginPage';


function App() {

	const homeLink = '/';
	const tagsLink = '/search_by_tag';
	const aboutMeLink = '/about_me';
	const loginLink = '/login'

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
				<Route path={loginLink}>
					<LoginPage />
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
