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

const UserDetail = ({ users, deleteUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(id));

  const handleDelete = () => {
    deleteUser(user.id);
    navigate('/users');
  };

  return (
    <DetailContainer>
      <h1>Detalhes do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Endereço: {user.address}</p>
      <p>Telefone: {user.phone}</p>
      <EditButton as={Link} to={`/edit-user/${user.id}`}>Editar</EditButton>
      <Button onClick={handleDelete}>Excluir</Button>
    </DetailContainer>
  );
};

export default UserDetail;

