import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import Logo from '../../assets/img/Logo.svg'
import SearchLogo from '../../assets/img/SearchLogo.svg'
import './style.scss';

interface navigationButton {
	title: string;
	path: string;
}

interface navigationProps {
	active?: string;
}

const Navigation = ({ active }: navigationProps) => {
	const [activeButton, setActiveButton] = useState<string | undefined>(active);
	const history = useHistory();

	const navButtons: navigationButton[] = [
		{
			title: 'Home',
			path: '/'
		},
		{
			title: 'Tags',
			path: '/search_by_tag'
		},
		{
			title: 'About Me',
			path: '/about_me'
		}
	]

	const handleNavigation = (path: string) => {
		setActiveButton(path);
		history.push(path);
	}

	const goToHomePage = () => {
		history.push('/');
	}

	const handleLogin = () => {
		history.push('/login')
	}

    return(
        <nav className="navigation-section">
			<div className="navigation-section__main">
				<img
					src={Logo}
					alt="Logo"
					className="navigation-section__main-logo"
					onClick={goToHomePage}
				/>
				<ul className="navigation-section__list">
					{
						navButtons.map(item => {
							return(
								<li 
									key={item.title}
									className={(activeButton === item.path) 
												? "navigation-section__list-item active" 
												: "navigation-section__list-item"}
									onClick={() => handleNavigation(item.path)}>
									{item.title}
								</li>
							)
						})
					}
				</ul>
			</div>
			<div className="navigation-section__login">
				<img 
					src={SearchLogo} 
					alt="Search"
					className="navigation-section__search-icon"
				/>
				<Button
					styles='navigation-section__login-btn'
					title='Login'
					handleClick={() => handleLogin()}
				/>
			</div>
        </nav>
    )
}

export default Navigation;