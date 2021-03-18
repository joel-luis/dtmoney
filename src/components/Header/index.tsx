import React from 'react';
import logo from '../../assets/logo.svg';

import { Container, Content, Logo } from './styles';

interface HeaderProps {
  onOpenModal: () => void;
}

function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="dt money" />
        </Logo>
        <button type="button" onClick={onOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

export default Header;
