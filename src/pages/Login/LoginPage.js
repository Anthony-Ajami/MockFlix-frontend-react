import './loginPage.scss'

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../formInput/FormInput';

import useAppStateContext from '../../hooks/useAppStateContext';

import { loginInputs } from '../../data/formInputs';
import { loginFormValidation } from '../../utils/formValidations';

import { login } from '../../services/accounts.services';

const initialState = {
    username: '',
    password: '',
};

function Login() {

    useEffect(() => {
        setBackgroundColor('/images/login-background.jpg');
    }
        , []);

    const setBackgroundColor = (image) => {
        document.body.style.backgroundImage = `url(${image})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }

    const [formValues, setFormValues] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});
    const { dispatch } = useAppStateContext();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const noErrors = Object.values(formErrors).every((err) => err === '');
        if (noErrors) {
            // calling the backend api 'login' to login the user
            login(formValues, dispatch, navigate);
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = '#111';
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        loginFormValidation(setFormErrors, name, value);
    };

    return (
        <div className='Auth-form-container'>
            <div>
                <img
                    src='/images/logo.png'
                    alt='MockFlix Logo'
                    height={70}
                    width={200}
                />
            </div>
            <form className='Auth-form' onSubmit={handleSubmit}>
                {loginInputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={formValues[input.name]}
                        errorMessage={formErrors[input.name] && formErrors[input.name]}
                        onChange={onInputChange}
                    />
                ))}

                <button type='submit' className='loginButton'>
                    Sign in
                </button>

                <div className='noPassword'>
                    <span>Don't have a password yet?</span>
                    <Link to='/register' className='SMS_Signup'>
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login