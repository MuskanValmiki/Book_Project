import React from 'react';
import './Book.css'; // Import the CSS file for styling

const Book = ({ title, author, genre, year }) => {
  return (
    <div className="book">
      <h2 className="title">{title}</h2>
      <p className="author">By {author}</p>
      <p className="genre">{genre}</p>
      <p className="year">Year: {year}</p>
    </div>
  );
};

export default Book;
