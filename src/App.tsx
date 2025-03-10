import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState} from "react";
import Modal from "react-modal"
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root")
//import styled from './index'
export function App() {
  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] = useState(false);

  function handleOpenNewTransctionModal(){
    setIsNewTransctionModalOpen(true);
  }
  function handleCloseNewTransctionModal(){
    setIsNewTransctionModalOpen(false);
  }
  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransctionModal}/>
     <Dashboard/>
     <TransactionTable/>
     <NewTransactionModal 
      isOpen={isNewTransctionModalOpen}
      onRequestClose={handleCloseNewTransctionModal}
     />
     <GlobalStyle/>
    </>
  );
}


