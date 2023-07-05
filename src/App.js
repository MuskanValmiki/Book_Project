import React from 'react';
import Book from './Book';

const App = () => {
  // Array of books
  const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
      year: 1925,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Classic',
      year: 1960,
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Classic',
      year: 1951,
    },
  ];

  return (
    <div>
      <h1>Book Collection</h1>
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          genre={book.genre}
          year={book.year}
        />
      ))}
    </div>
  );
};

export default App;
