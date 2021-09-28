import React from 'react';
import Button from '../../Components/Button/Button';
import Logo from '../../assets/img/Logo.svg'
import SearchLogo from '../../assets/img/SearchLogo.svg'
import './style.scss';

const Navigation:React.FC = () => {
    return(
        <nav className="navigation-section">
			<div className="navigation-section__main">
				<img
					src={Logo}
					alt="Logo"
					className="navigation-section__main-logo"
				/>
				<ul className="navigation-section__list">
					<li className="navigation-section__list-item active">Home</li>
					<li className="navigation-section__list-item">Tags</li>
					<li className="navigation-section__list-item">About Me</li>
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
					handleClick={() => console.log('Clicked')}
				/>
			</div>
        </nav>
    )
}

export default Navigation;