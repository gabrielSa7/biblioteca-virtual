import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  padding: 20px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:
center;
  margin-bottom: 20px;
`;

const AddButton = styled(Link)`
  padding: 10px 20px;
  background-color: #2196F3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const LoanItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const LoanList = ({ loans }) => (
  <ListContainer>
    <ListHeader>
      <h1>Lista de Empréstimos</h1>
      <AddButton to="/add-loan">Registrar Empréstimo</AddButton>
    </ListHeader>
    {loans.map(loan => (
      <LoanItem key={loan.id}>
        <div>
          <p>ID do Usuário: {loan.userId}</p>
          <p>ID do Livro: {loan.bookId}</p>
          <p>Data de Empréstimo: {loan.loanDate}</p>
          <p>Data de Devolução: {loan.returnDate}</p>
        </div>
        <div>
          <Link to={`/loan/${loan.id}`}>Detalhes</Link>
        </div>
      </LoanItem>
    ))}
  </ListContainer>
);

export default LoanList;
