import React from 'react';
import logo from '../../assets/logo.svg';

import { Container, Content, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="dt money" />
        </Logo>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
