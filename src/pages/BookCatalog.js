import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CatalogContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const BookList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BookItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const BookCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <CatalogContainer>
      <h1>Catálogo de Livros</h1>
      <BookList>
        {books.map((book) => (
          <BookItem key={book.id}>
            <h2>{book.title}</h2>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Ano de Publicação:</strong> {book.publicationYear}</p>
            <p><strong>Editora:</strong> {book.publisher}</p>
            <p><strong>Categoria:</strong> {book.category}</p>
          </BookItem>
        ))}
      </BookList>
    </CatalogContainer>
  );
};

export default BookCatalog;
