import { Container, Content } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Content>
        <TransactionTable />
      </Content>
    </Container>
  );
}
