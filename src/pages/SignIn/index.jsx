import Container from "./style";
import { Title } from "../../components/Title";
import  LoginForm  from "../../components/LoginForm";
import CreateAccountLink from "../../components/CreateAccount-Link";

export function SigIn() {
  return (
    <Container>
      <Title />
   <LoginForm/>
<CreateAccountLink/>
    </Container>
    
  
  );
}

export default SigIn;
