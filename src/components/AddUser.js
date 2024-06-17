import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #2196F3;
  color: white;
  border: none;
  cursor: pointer;
`;

const AddUser = ({ addUser }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', address: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const user = await response.json();
        addUser(user); // Atualiza a lista de usuários no estado do App
        navigate('/users'); // Redireciona para a lista de usuários
      } else {
        console.error('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2>Cadastro de Usuário</h2>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Digite seu nome" 
            required 
          />
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Digite seu email" 
            required 
          />
          <Input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Digite sua senha" 
            required 
          />
          <Input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            placeholder="Digite seu endereço" 
          />
          <Input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="Digite seu telefone" 
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
};

export default AddUser;
