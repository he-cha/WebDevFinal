import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUserName] = useState("");    // This manages the username input
    const [password, setPassword] = useState("");    // This manages the password input
    const [errorMessage, setErrorMessage] = useState("");  // This manages the error message

    const navigate = useNavigate();  // Initialize navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make the POST request to the backend
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const db_data = await response.json();  // Get the response from the backend

        // Check if the response is successful or not
        if (response.ok) {
            console.log("Login successful");
            navigate('/BookList');
        } else {
            // If the response is not successful, set the error message
            setErrorMessage(db_data.error || "Unknown error");
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}  // Set username value
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        type="password"  // Use type 'password' for security
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}  // Set password value
                    />                
                </div>
                <button id="login" type="submit" value="submit">Log in</button>
            </form>
            {/* Display the error message if it exists */}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Login;
