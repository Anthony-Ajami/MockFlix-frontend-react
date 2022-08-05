import './registerPage.scss'

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../../formInput/FormInput';

import useAppStateContext from '../../hooks/useAppStateContext';

import { signUpInputs } from '../../data/formInputs';
import { signUpFormValidation } from '../../utils/formValidations';

import { register } from '../../services/accounts.services';

const initialState = {
    email: '',
    user_firstname: '',
    user_lastname: '',
    username: '',
    password: '',
};

function RegisterPage() {

    useEffect(() => {
        console.log('Register page rendered');
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
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const noErrors = Object.values(formErrors).every((err) => err === '');
        if (noErrors) {
            // calling the backend api 'signup' to register the user
            register(formValues, navigate);
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        signUpFormValidation(setFormErrors, name, value);
    };

    return (
        <div className='Auth-form-container'>
            <div>
                <img
                    src={'/images/logo.png'}
                    alt='Logo de la République française (1999)'
                    height={70}
                    width={200}
                />
            </div>
            <form className='Auth-form' onSubmit={handleSubmit}>
                {signUpInputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={formValues[input.name]}
                        errorMessage={formErrors[input.name] && formErrors[input.name]}
                        onChange={onInputChange}
                    />
                ))}

                <button type='submit' className='loginButton'>
                    Sign up
                </button>

                <div className='noPassword'>
                    <span>Already have an account?</span>
                    <Link to='/login' className='SMS_Signup'>
                        Sign In
                    </Link>
                </div>
            </form>
        </div>
    )

}

export default RegisterPage;