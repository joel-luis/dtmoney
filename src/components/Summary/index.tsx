import React, { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container, Content, Header } from './styles';

const Summary: React.FC = () => {
  const data = useContext(TransactionsContext);
  return (
    <Container>
      <Content>
        <Header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </Header>
        <strong>R$1000,00</strong>
      </Content>
      <Content>
        <Header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </Header>
        <strong>- R$500,00</strong>
      </Content>
      <Content>
        <Header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </Header>
        <strong>R$500,00</strong>
      </Content>
    </Container>
  );
};

export default Summary;
