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

const LoanDetail = ({ loans, deleteLoan }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loan = loans.find(l => l.id === parseInt(id));

  const handleDelete = () => {
    deleteLoan(loan.id);
    navigate('/loans');
  };

  return (
    <DetailContainer>
      <h1>Detalhes do Empréstimo</h1>
      <p>ID do Usuário: {loan.userId}</p>
      <p>ID do Livro: {loan.bookId}</p>
      <p>Data de Empréstimo: {loan.loanDate}</p>
      <p>Data de Devolução: {loan.returnDate}</p>
      <EditButton as={Link} to={`/edit-loan/${loan.id}`}>Editar</EditButton>
      <Button onClick={handleDelete}>Excluir</Button>
    </DetailContainer>
  );
};

export default LoanDetail;
