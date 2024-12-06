// uses react to render components like <App /> 
// (but App.js doesn't exist yet)

/*
will eventually initialize express and .ejs in this file 
s.t. react components can be imported to & rendered from here
*/

/* 
may need to change .render() code below: 
does root.render here assume it's rendering into .html?
    if so, then change this file s.t. it renders to index.ejs
    in a .ejs-friendly way (or change <div id="root"> in index.ejs)
*/

import React, {useState} from 'react';
// import BookList from 'BookList.js';      code not written yet
// import App from './App';              App.js doesn't exist yet

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [errorMessage, setErr] = useState("");
    
    const handleSubmit = async(e) => {
        e.preventDefault();
    

        const response = await fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        });

        const db_data = await response.json();

        if(response.ok) {
            console.log("login successful")
        }else {
            setErrorMessage("Invalid username or password.");
        }
    };

    return (
        <div className = "login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="username">Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        name="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input 
                        id="password" 
                        type="text" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />                
                    </div>
                <button id="login" type="submit" value="submit">Log in</button>
			</form>
            <form>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
        </div>
    );

};

export default Login