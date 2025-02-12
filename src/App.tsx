import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionTable } from "./components/TransactionTable";
import { GlobalStyle } from "./styles/global";

//import styled from './index'
export function App() {
  return (
    <>
     <Header/>
     <Dashboard/>
     <TransactionTable/>
     <GlobalStyle/>
    </>
  );
}


