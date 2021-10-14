import React from "react";
import Navigation from "../../Sections/Navigation";
import user from '../../assets/img/user.svg';
import password from '../../assets/img/password.svg';
import './style.scss';

const LoginPage = () => {

const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('logged in');
}

    return(
        <>
            <Navigation />
            <div className='login'>
            <h2 className='login-title'>
                Welcome!
            </h2>
            <span className='login-subtitle'>
                Sign in to get the most out of nuntium.
            </span>
            <form className='login-form'>
                <div className='login-form__input-wrapper'>
                    <img src={user} alt="username"/>
                    <input 
                        type='text' 
                        className='login-form__input'
                        placeholder='Username'/>
                </div>
                <div className='login-form__input-wrapper'>
                    <img src={password} alt="username"/>
                    <input 
                        type='text' 
                        className='login-form__input'
                        placeholder='Password'/>
                </div>
                <div className='login-form__checkbox'>
                    <input 
                        type='checkbox' 
                        id='custom-checkbox'
                        className='login-form__checkbox-input'/>
                    <label 
                        htmlFor='custom-checkbox'
                        className='login-form__checkbox-label'
                        >
                            Remember me
                        </label>
                </div>
                <button 
                    className='login-form__login-btn'
                    onClick={(e) => handleLogin(e)}>
                    Login
                </button>
            </form>
        </div>
        </>
    )
}

export default LoginPage;