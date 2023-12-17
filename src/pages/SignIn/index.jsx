import Container from "./style";
import { Title } from "../../components/Title";
import { Input } from "../../components/Input";

export function SigIn() {
  return (
    <Container>
      <Title />
      <Input label="email" placeholder="Exemplo:exemplo@exemplo.com.br"/>
    </Container>
    
  
  );
}
