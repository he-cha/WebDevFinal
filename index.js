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

import React from 'react';
import ReactDOM from 'react-dom/client';
// import BookList from 'BookList.js';      code not written yet
// import App from './App';              App.js doesn't exist yet

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
