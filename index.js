// uses react to render components like <App /> 
// but App.js doesn't exist yet

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
// gets book list from db and renders book info table in index.ejs 
TO DO: put code in server.js since express and ejs are already initialized there
    ++ change destination from index.ejs to BookList.js component file

       ? export BookList from BookList.js straight into index.ejs
       OR use server.js to import BookList.js and render into index.ejs ???

// TO DO: store books from db into this list
const books = []

app.get('/home', (req, res) => {
    // arg in braces is object to send to ejs file
    res.render('index.ejs', { books: books });
})


// redundant code that's also in server.js:
import express from 'express';
const app = express();
app.set('view engine', 'ejs');
app.listen(3000, function (req, res) { 
    console.log("Connected on port:3000"); 
});
*/
