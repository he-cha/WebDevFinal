// BookInfo.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookInfo.css'; // Import the CSS file

const BookInfo = () => {
    const { title } = useParams();
    const [book, setBook] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/books/${encodeURIComponent(title)}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book details");
                }
                const data = await response.json();
                setBook(data.book);
            } catch (error) {
                setErrorMessage(error.message);
            }
        };
        fetchBook();
    }, [title]);

    if (errorMessage) {
        return <p style={{ color: 'red' }}>{errorMessage}</p>;
    }

    if (!book) {
        return <p>Loading book details...</p>;
    }

    return (
        <div className="book-info">
            <h2>{book.title}</h2>
            <div className="book-details">
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Date:</strong> {book.date}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Pages:</strong> {book.pages}</p>
            </div>
        </div>
    );
};

export default BookInfo;