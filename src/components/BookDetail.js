import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';

const DetailContainer = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const EditButton = styled(Button)`
  background-color: #2196F3;
`;

const BookDetail = ({ books, deleteBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find(b => b.id === parseInt(id));

  const handleDelete = () => {
    deleteBook(book.id);
    navigate('/books');
  };

  return (
    <DetailContainer>
      <h1>Detalhes do Livro</h1>
      <p>Título: {book.title}</p>
      <p>Autor: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Ano de Publicação: {book.publicationYear}</p>
      <p>Editora: {book.publisher}</p>
      <p>Categoria: {book.category}</p>
      <p>Disponibilidade: {book.available ? 'Disponível' : 'Indisponível'}</p>
      <EditButton as={Link} to={`/edit/${book.id}`}>Editar</EditButton>
      <Button onClick={handleDelete}>Excluir</Button>
    </DetailContainer>
  );
};

export default BookDetail;
