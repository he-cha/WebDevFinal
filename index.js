// uses react to render <App \> but App.js doesn't exist yet

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// ^ App.js doesn't exist yet (will fail to render below)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

/*
// renders book list table into index.ejs and uses app.listen(3000)
// but some of the code below may be redundant because server.js also has an app.listen()
// and server.js uses db to verify login info through(?) index.ejs 

import express from 'express';
const app = express();

// "set EJS as the templating engine"
app.set('view engine', 'ejs');

// TO DO: store books from db into this list
// OR find another way to deliver book list to res.render below
const books = []

app.get('/home', (req, res) => {
    // arg in braces is object to send to ejs file
    res.render('index.ejs', { books: books });
})

// Server setup 
app.listen(3000, function (req, res) { 
    console.log("Connected on port:3000"); 
});
*/
