import React from 'react';

const Bookcard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
      <hr />
    </div>
  );
};

export default Bookcard;