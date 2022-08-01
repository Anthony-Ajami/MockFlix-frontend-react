import './loginPage.scss'
import React, { useState, useMemo, useContext } from "react";
import { UserContext } from '../../context/UserContext';
import { login } from './login';

function Login() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div className='login'>
            <h1>Login</h1>
            <form>
                <label>
                    Email:
                    <input type='email' />
                </label>
                <label>
                    Password:
                    <input type='password' />
                </label>
                <button type='submit' onClick={async (e) => {
                    e.preventDefault();
                    const user = await login();
                    setUser(user);
                }}
                >Login</button>
            </form>
        </div>

    )
}

export default Login