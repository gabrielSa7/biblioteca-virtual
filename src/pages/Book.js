import React from 'react';
import BookDetail from '../components/BookDetail';

const Book = ({ books, deleteBook }) => (
  <div>
    <BookDetail books={books} deleteBook={deleteBook} />
  </div>
);

export default Book;
