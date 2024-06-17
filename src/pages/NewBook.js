import React from 'react';
import AddBook from '../components/AddBook';

const NewBook = ({ addBook }) => (
  <div>
    <AddBook addBook={addBook} />
  </div>
);

export default NewBook;
