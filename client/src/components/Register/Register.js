import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const handleRegisteration = () => {

    // };

    const handleInputChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    };

    return (
        <div>
            <h2>
                Register
            </h2>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleInputChange}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={handleInputChange}
            />
            <button
            //  onClick={handleRegistartion}
            >
                Sign up
            </button>
        </div>
    );
}