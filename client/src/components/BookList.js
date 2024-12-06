/* 
will use list of books' data from db to write a react component
that can be rendered into index.ejs using index.js
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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

// Function to determine image based on book title
    const getImageForBook = (title) => {
        let imageUrl = 'https://w7.pngwing.com/pngs/425/805/png-transparent-computer-icons-book-book-cover-angle-recycling-logo-thumbnail.png'; // Default image URL
        
        switch (title) {
            case 'Gone with the Wind':
                imageUrl = 'https://m.media-amazon.com/images/I/718gkx8l6pL.jpg'; // Replace with actual image URL
                break;
            case 'Lord of the Flies':
                imageUrl = 'https://images.bookoutlet.com/covers/large/isbn978039/9780399501487-l.jpg'; // Replace with actual image URL
                break;
            case 'Animal Farm':
                imageUrl = 'https://m.media-amazon.com/images/I/71JUJ6pGoIL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'Wicked':
                imageUrl = 'https://m.media-amazon.com/images/I/61HqfF8edgL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'Son of a Witch':
                imageUrl = 'https://booksofwonder.com/cdn/shop/files/9780063398368_d3e1b.jpg?v=1718211988'; // Replace with actual image URL
                break;
            case 'A Lion Among Men':
                imageUrl = 'https://m.media-amazon.com/images/I/71brkHyn17L._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'Out of Oz':
                imageUrl = 'https://www.harpercollins.com/cdn/shop/files/9780062101235.jpg?v=1732836648&width=350'; // Replace with actual image URL
                break;
            case 'Fahrenheit 451':
                imageUrl = 'https://m.media-amazon.com/images/I/61l8LHt4MeL.jpg'; // Replace with actual image URL
                break;
            case 'Fellowship of the Ring':
                imageUrl = 'https://m.media-amazon.com/images/I/71Ep7UNeTtL.jpg'; // Replace with actual image URL
                break;
            case 'A Court of Silver Flames':
                imageUrl = 'https://m.media-amazon.com/images/I/9149FbTXF2L._UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'The Housemaid':
                imageUrl = 'https://prodimage.images-bn.com/pimages/9781538742570_p0_v5_s1200x630.jpg'; // Replace with actual image URL
                break;
            case 'Then She Was Gone':
                imageUrl = 'https://m.media-amazon.com/images/I/910nluQF9+L.jpg'; // Replace with actual image URL
                break;
            case 'The Social Animal':
                imageUrl = 'https://m.media-amazon.com/images/I/81XASbZUujL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'Hidden Figures':
                imageUrl = 'https://m.media-amazon.com/images/I/81Vm5uzEibL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'The Outsiders':
                imageUrl = 'https://m.media-amazon.com/images/I/71Bg39CmhoL._AC_UF350,350_QL50_.jpg'; // Replace with actual image URL
                break;
            case 'Odyssey':
                imageUrl = 'https://m.media-amazon.com/images/I/81g0AATkO9L.jpg'; // Replace with actual image URL
                break;
            case 'Diary of a Wimpy Kid':
                imageUrl = 'https://m.media-amazon.com/images/I/81R2N4PRuUL.jpg'; // Replace with actual image URL
                break;
            case 'The Cat in the Hat':
                imageUrl = 'https://m.media-amazon.com/images/I/61n2olkhm8L._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case '1984':
                imageUrl = 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'Gone Girl':
                imageUrl = 'https://m.media-amazon.com/images/I/713e4Yk6brL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'A Midsummer Nights Dream':
                imageUrl = 'https://m.media-amazon.com/images/I/61iQwnrDQAL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'Divergent':
                imageUrl = 'https://m.media-amazon.com/images/I/91bxBYl307L.jpg'; // Replace with actual image URL
                break;
            case 'The Maze Runner':
                imageUrl = 'https://m.media-amazon.com/images/I/91Jra1QAMPL.jpg'; // Replace with actual image URL
                break;
            case 'The Scorch Trials':
                imageUrl = 'https://m.media-amazon.com/images/I/71hbDMgo6rL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'The Death Cure':
                imageUrl = 'https://m.media-amazon.com/images/I/91vaqmbaF4L.jpg'; // Replace with actual image URL
                break;
            case 'The Firm':
                imageUrl = 'https://m.media-amazon.com/images/I/91Ge-6fN0YL.jpg'; // Replace with actual image URL
                break;
            case 'The Lightning Thief':
                imageUrl = 'https://m.media-amazon.com/images/I/91WN6a6F3RL._AC_UF1000,1000_QL80_.jpg'; // Replace with actual image URL
                break;
            case 'The Sea of Monsters':
                imageUrl = 'https://m.media-amazon.com/images/I/91YMTyxpWLL.jpg'; // Replace with actual image URL
                break;
            case 'The Titans Curse':
                imageUrl = 'https://m.media-amazon.com/images/I/91Ca-K4vjOL.jpg'; // Replace with actual image URL
                break;
            case 'The Battle of the Labyrinth':
                imageUrl = 'https://m.media-amazon.com/images/I/91GjM4M5DeL.jpg'; // Replace with actual image URL
                break;
            case 'The Last Olympian':
                imageUrl = 'https://m.media-amazon.com/images/I/91f6FyULwCL.jpg'; // Replace with actual image URL
                break;
            default:
                imageUrl = 'https://w7.pngwing.com/pngs/425/805/png-transparent-computer-icons-book-book-cover-angle-recycling-logo-thumbnail.png'; // Default image if title is not found
                break;
        }

        return imageUrl;
    };

//checkout schnan
const handleCheckout = (bookTitle) => {
        // for now, just alert the title that is being checked out
        // not lots of functionality
        alert(`Checking out: ${bookTitle}`);
    };

    return (
        <div className="book-list">
            <h2>Available Books</h2>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <div className="book-grid">
                    {books.map((book) => (
                        <div className="book-card" key={book.title}>
                            {/* Book Title and Checkout Button */}
                            <div className="book-title">
                                <h3>
                                    <Link to={`/booklist/bookinfo/${encodeURIComponent(book.title)}`}>
                                        {book.title}
                                    </Link>
                                </h3>
                                {/* Hover effect to show more details */}
                                <div className="book-popup">
                                    <p><strong>Title: </strong> {book.title}</p>
                                    <p><strong>Author: </strong> {book.author}</p>
                                    <p><strong>Year: </strong> {book.date}</p>
                                    <p><strong>Genre: </strong> {book.genre}</p>
                                    <p><strong>Pages: </strong> {book.pages}</p>
                                </div>
                            </div>

                            {/* Checkout button (only visible by default) */}
                            {book.instock && (
                                <button onClick={() => handleCheckout(book.title)}>
                                    Check Out
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;