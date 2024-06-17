import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #2196F3;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 10px;
  font-size: 18px;

  &:hover {
    background-color: #1e88e5;
    border-radius: 5px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Biblioteca Virtual GS</Logo>
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Livros</NavLink>
      <NavLink to="/users">Usuários</NavLink>
      <NavLink to="/loans">Empréstimos</NavLink>
      <NavLink to="/search-books">Consultar Disponibilidade</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
