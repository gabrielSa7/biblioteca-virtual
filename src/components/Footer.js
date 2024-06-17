import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2196F3; /* Alterado para azul */
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Biblioteca Virtual GS</p> {/* Alterado para "Biblioteca Virtual GS" */}
  </FooterContainer>
);

export default Footer;
