import React, { useState } from 'react';
import Modal from 'react-modal';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      />
      <Dashboard />
    </>
  );
}
