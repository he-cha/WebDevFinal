/* 
will use list of books' data from db to write a react component
that can be rendered into index.ejs using index.js
*/
import React, { useState, useEffect } from 'react';
import './BookList.css'; // Import Booklist CSS

const BookList = () => {
    const [books, setBooks] = useState([]); // State to store books data
    const [errorMessage, setErrorMessage] = useState(""); // Error message state

    // Fetch books data from the backend on component mount
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/books");
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }

                const data = await response.json(); // Parse response to JSON
                setBooks(data.books); // Set books data in state
            } catch (error) {
                setErrorMessage(error.message); // Set error message in state
            }
        };

        fetchBooks();
    }, []); // Run only once on component mount

    return (
        <div className="book-list">
            <h2>Available Books</h2>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {books.length === 0 ? ( //check amount of books; if 0 -> print no books available; if 1+ -> list the books wiht book-grid
                <p>No books available</p> 
            ) : (
                <div className="book-grid"> //have its own .css formatting for rows
                    {books.map((book) => ( //this may need tweaking to get it how we want it formatted; same with booklist.css
                        <div className="book-card" key={book.title}>
                            <h3>{book.title}</h3>
                            <p><strong>Author:</strong> {book.author}</p>
                            <p><strong>Year:</strong> {book.date}</p>
                            <p><strong>Genre:</strong> {book.genre}</p>
                            <p><strong>Pages:</strong> {book.pages}</p>
                            <p><strong>Stock Status:</strong> {book.instock ? "In Stock" : "Out of Stock"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;



