import React, { useState } from 'react';
import Modal from 'react-modal';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransictionModalOpen] = useState(
    false,
  );
  function handleOpenModal() {
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransictionModalOpen(false);
  }
  return (
    <>
      <GlobalStyle />
      <Header onOpenModal={handleOpenModal} />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <Dashboard />
    </>
  );
}
