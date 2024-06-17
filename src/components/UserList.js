import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListContainer = styled.div`
  padding: 20px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddButton = styled(Link)`
  padding: 10px 20px;
  background-color: #2196F3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const UserItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
`;

const UserList = ({ users }) => (
  <ListContainer>
    <ListHeader>
      <h1>Lista de Usuários</h1>
      <AddButton to="/add-user">Adicionar Usuário</AddButton>
    </ListHeader>
    {users.map(user => (
      <UserItem key={user.id}>
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <Link to={`/user/${user.id}`}>Detalhes</Link>
        </div>
      </UserItem>
    ))}
  </ListContainer>
);

export default UserList;
