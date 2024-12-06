import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import BookList from './components/BookList';
import './index.css';

function App() {
    return (
        <Router>
            <div className="App">

                <Routes>
                    <Route path="/" element={<Login />} /> 
                    <Route path="/booklist" element={<BookList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
