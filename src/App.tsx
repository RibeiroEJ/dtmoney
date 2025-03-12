import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");
//import styled from './index'
export function App() {
  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] =
    useState(false);

  function handleOpenNewTransctionModal() {
    setIsNewTransctionModalOpen(true);
  }
  function handleCloseNewTransctionModal() {
    setIsNewTransctionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransctionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransctionModalOpen}
        onRequestClose={handleCloseNewTransctionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
