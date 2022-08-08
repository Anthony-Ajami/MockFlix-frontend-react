import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import FormInput from '../../formInput/FormInput';

import { addAddress } from '../../services/accounts.services.js';

import { addressInputs } from '../../data/formInputs';
import { addressFormValidation } from '../../utils/formValidations';

const initialState = {
    country: '',
    area: '',
    city: '',
    street: '',
    number: '',
};

function AddressPage() {

    const location = useLocation();
    const username = location.state.username;

    useEffect(() => {
        setBackgroundColor('/images/login-background.jpg');
    }
        , [username]);

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
            addAddress(formValues, navigate, username);
        }
    }

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        addressFormValidation(setFormErrors, name, value);
    };

    return (
        <div className='Auth-form-container'>
            <div>
                <img
                    src={'/images/logo.png'}
                    alt='MockFlix Logo'
                    height={70}
                    width={200}
                />
            </div>
            <form className='Auth-form' onSubmit={handleSubmit}>
                {addressInputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={formValues[input.name]}
                        errorMessage={formErrors[input.name] && formErrors[input.name]}
                        onChange={onInputChange}
                    />
                ))}

                <button type='submit' className='loginButton'>
                    Choose Subscription
                </button>

            </form>
        </div>
    )
}

export default AddressPage;